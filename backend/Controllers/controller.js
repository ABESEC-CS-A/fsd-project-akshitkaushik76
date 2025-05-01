const express = require('express');
const express = require('express');
const User = require('./../models/usermodel');

exports.adduser = async(req,res,next)=>{
  try{
    console.log(req.body);
    const data = await User.create(req.body);
    res.status(201).json({
        status:'success',
        data
    })
  }catch(error) {
    req.status(500).json({
        status:'fail',
        error
    })
  }
}
