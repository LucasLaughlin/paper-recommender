from flask import Flask, request
import pymongo
from dotenv import load_dotenv
import os
import json
import bson.json_util as json_util
from sklearn.neighbors import NearestNeighbors
import pickle
import numpy as np

basedir = os.path.abspath(os.path.dirname(__file__))
load_dotenv(os.path.join(basedir, '.flaskenv'))

myclient = pymongo.MongoClient(os.environ["MONGO_URI"])
mydb = myclient["dev"]
mycol = mydb["papers"]

k_nearest = pickle.load(open(os.environ["K_NEAR_MODEL"], 'rb'))
embeddings = np.load(os.environ["TFIDF_EMBEDDINGS"])

application = Flask(__name__)

@application.route('/', methods = ['GET'])
def checkServerHealth():
  return "server upload succesful"
  
@application.route('/recommend', methods = ['POST'])
def recommendDocuments():
  print(request)
  print(request.get_json())
  selected_ideces = request.get_json()['selected']
  skip = int(request.args.get('skip'))
  limit = int(request.args.get('limit'))
  
  selectedDocument = embeddings[selected_ideces, :]
  #print(selectedDocument)
  _, near_idx = k_nearest.kneighbors(X=selectedDocument, n_neighbors=10, return_distance = True)
  
  #print([int(x) for x in near_idx[0]])
  
  skip = 0
  limit = 10
  
  pipeline = [
      {
        "$match": {
          "idx": { 
            "$in": [int(x) for y in  near_idx for x in y]
          }
        }
      },
      {
        "$facet": {
          "documents": [
            { "$skip": skip * limit },
            { "$limit": limit }
          ],
          "count": [
            { "$count": 'count' }
          ]
        }
      }
    ]
    
  results = list(mycol.aggregate(pipeline))

  #print(results)
  retObject = {
      "documents": results[0]["documents"],
    }
  if (results[0]["count"]):
    retObject["count"]= results[0]["count"][0]["count"]
  else:
    retObject["count"]= 0
  
  return json_util.dumps(retObject)
  
  
  
  
  return json_util.dumps(near_idx)

@application.route('/list')
def listDocuments():
    search = request.args.get('search') + " "
    
    skip = int(request.args.get('skip'))
    limit = int(request.args.get('limit'))
    pipeline = [
      {
        "$search": {
          "index": 'searchPapers',
          "text": {
            "query": search,
            "path": {
              'wildcard': '*'
            }
          }
        }
      },
      {
        "$facet": {
          "documents": [
            { "$skip": skip * limit },
            { "$limit": limit }
          ],
          "count": [
            { "$count": 'count' }
          ]
        }
      }
    ]
    
    results = list(mycol.aggregate(pipeline))

    retObject = {
        "documents": results[0]["documents"],
      }
    if (results[0]["count"]):
      retObject["count"]= results[0]["count"][0]["count"]
    else:
      retObject["count"]= 0
    
    return json_util.dumps(retObject)


if __name__ == "__main__":
  application.run()