---
id: doc2
title: Layouts
sidebar_label: Layouts and its functionabilities
---

## Homepage

The main page that is going to show all companies when clicking in the search icon. It will also filter based on a keyword through all results. This page makes a request to the api endpoint and if it fails, it will logout the user.
This page uses Context API to pass some props to childrens.

## Login

The first page of the app, a simple login with email, password and validation if the credentials are wrong. If the user logs in, it will redirect to the homepage.

## Searchpage

This is a page to show single companies. This page will also set the url to `/search/COMPANY_ID` to make it more easier to be used.

## PrivateRoute

This is where we have the private router handler. At the moment it is a simple localStorage check. The reason is that our api is already checking if the user is authenticated everytime it makes a request. If this weren't the case, this wouldn't be a good and viable private route.

## Routes

Our main file that handle all the routes.
