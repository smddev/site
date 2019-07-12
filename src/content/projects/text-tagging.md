---
order: 11
title: Text tagging and categorization systems
industries:
  - machine-learning
services:
  - software-development
techs:
  - Python
  - sklearn
  - gensim
  - flask
description: We developed a number of automated solutions for texts tagging. It is a more or less standard task, to label or categorized new texts, based on a knowledge extracted from an existing texts corpora.
---

We implemented a standard text processing pipeline:
* Data gathering
  * Web-scraping
  * Development of tools for assessors
* Data cleansing and preprocessing (tokenization, stemming, TF-IDF)
* Texts clustering, topic modelling
* Learning number SVM, GBM or RF models
* Model selection, ensembling
* Ensemble post-processing, if needed
  * improve prediction results
  * reduce model complexity and memory requirements
* REST-service to expose learnt models to end customers