---
order: 3
title: ML-powered product search - guess what customers did mean
cover: electronic-parts.jpg
industries:
  - Retail
services:
  - data-science
  - software-development
techs:
  - Python
  - Spacy
  - MongoDB
  - Elasticsearch
  - Kubernetes 
description: Domain-oriented search engine that recognizes parameters of electronic components in customer-written search line and then finds the relevant product in catalog.
---
Large electronic component distributor company approached us with a problem of automating their online purchase workflow. 

## Challenges

Their customers are used to submit the lists with descriptions of products to be ordered in freely written form that has to be linked with a real product by human. 

## Solution

We have developed Natural Language Processing (NLP) model that does Named Entity Recognition (NER) over customer search lines 
and identifies various kinds of product parameters, such as electrical units of measure and their relevant values, part numbers, dimensions, case codes e.t.c.
The recognized product parameters then were used for relevant product search.

## Outcome

The developed model has achieved ~90% accuracy in identifying electronic parts parameters.