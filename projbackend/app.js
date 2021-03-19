const mongoose = require('mongoose');
const express = require('express');

mongoose.connect("mongodb://localhost:27017/test", {useNewUrlParser: true});