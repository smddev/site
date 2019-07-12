---
order: 10
title: Threat detection decision module
industries:
  - machine-learning
services:
  - software-development
techs:
  - Python
  - sklearn
  - lightgbm
  - C++
description: Our customer has been developing a sophisticated security radar system, able to detect weapons and explosives, based on characteristics of a reflected microwave signal. They have a decision module, however its performance was not good enough. They contracted us to analyze the problem and develop a better solution.
---

## Challenges

Their radar produces a stream of multi-channel multi-modal (radar and video) 3D data, which requires lots of computer power to do even basic processing. Our customer has already implemented sophisticated feature engineering, reducing the problem dimension significantly. However, they don’t have fine-grained labels for the engineered features, resulting in a noisy input for machine learning algos. The estimated efforts for gathering fine-grained labels is prohibiting. Our challenge was to develop a novel machine learning approach able to deal with labeling noise in data. An additional source of complexity was the requirement to be able to learn from millions of training samples.

## Solution

We analyzed the existing approach and reformulated machine learning task, so that a new performance metric deals with the noise in labels. That resulted in a non-tabular data format, but we developed a iteratively re-weighted framework, which can be combined with existing machine learning algo implementations, leveraging efforts invested in development of large-scale machine learning algorithms.

## Outcome

A machine learning framework able to deal with the customer specific data in a scalable manner. The approach is flexible enough to enable new opportunities for product development and customization.