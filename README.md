# Paper Recommender

Table of Contents:
  * ### Clustering.ipynb
    * ##### Tokenize (documents_with_tokens.pickle)
      Use spacy tokenizer to tokenize abstracts for TF-IDF. *Note: RoBERTa and GPT-2 have their own tokenizers*
    * ##### Kmeans Clustering
      Define Functiosn for performing K-means clustering
    * ##### Dimension Reduction
      Functions to perform dimension reduction on embddings with PCA, Umap, and TSNE
    * ##### Plotting Functions
      Functions to plot 2d embeddings once dimension reduction has been performed
    * ##### Nearest Neighbor Function
      Functions to extract l nearest neighbors given a target embedding and a list of embeddings
    * ##### Co-citation Functions
      Functions for calculating Co-citation, reference and citation scores given a target embeddings and a list of nearest neighbor embeddings
    * ##### TFIDF
      Perform a full run of getting TFIDF embeddings from abstracts. Clusters, plots, and calculates the co-citation scores
    * ##### Doc2Vec
      Perform a full run of getting Doc2Vec embeddings from abstracts. Clusters, plots, and calculates the co-citation scores
    * ##### RoBERTa
      Fine tune RoBERTa on the abstract data and extract document embeddings. Then calculate co-citation scores.
  * ### DataExploration.ipynb:
    * ##### Load Initial Data and Trim (trimmed_arxiv_docs.pickle) 
      
      Take raw json data and sample by year/oi then szve into a df
      
    * ##### Data Cleaning (trimmed_cleaned_arxiv_docs.pickle)
      
      Summarize df and remove duplicates
    
    * ##### Sparse Matrix (sparse_matrix.pickle, idx2auth.pickle, idx2doc.pickle)
      
      Create an interaction df, sparse interaction matrix and idx2auth/idx2doc mappings
    
    * ##### Convert interaction to matrix authors and documents to ids
      
      Convert interaction df of authors and paper names to contain only ids (ids = index in unique authors/papers list)
    
    * ##### Author Frequency Analysis
      
      Create new datasets by setting minimum author frequency. This was an attempt to create better results by reducing the sparsity of the interaction matrix
    
    * ##### Cocitaion Study
      
      Creating and testing functions to measure cocitations using Open Citations API
  
  * ### Fine Tune GPT-2 (hep-th).ipynb
    * ##### Load Data and Create Dataset
      Download tokenizer, tokenize absrtactsa and create DataLoader objects for finetuning and validation
    * ##### Fine Tuning
      Download GPT-2 and fine tune it
    * ##### Extract Embeddings
      Using the fine tuned GPT-2 hidden layer outputs to create document embeddings
  * ### Interact With MongoDB.ipynb
    * ##### Uploading to Mongo
      Uploading document df to mongoDB database
    * ##### Deleting Documents
      Remove all documents from mongoDB
    * ##### Querying Mongo
      Protoype for querying mongoDB using pymongo
  
