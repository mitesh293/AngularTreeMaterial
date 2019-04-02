import { Component, enableProdMode, Injectable } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { NodeService } from './NodeService ';
import { HttpClient, HttpHandler } from '@angular/common/http';
/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface TreeNode {
  name: string;
  children?: TreeNode[];
}

const TREE_DATA: TreeNode[] = [
  {
    name: 'All Wells',
    children: [
      {
        name: 'Well1',
        children:[
          {
            name:'Curves ',
            children: [
              {
                name: 'All Curves (W1)',
                children:[
                  {name: 'Curve 1 (ALL(W1))'},
                  {name: 'Curve 2 (ALL(W1))'},
                  {name: 'Curve 3 (ALL(W1))'},
                  {name: 'Curve 4 (ALL(W1))'},
                  {name: 'Curve 5 (ALL(W1))'},
                  {name: 'Curve 6 (ALL(W1))'},
                  {name: 'Curve 7 (ALL(W1))'},
                  {name: 'Curve 8 (ALL(W1))'},
                  {name: 'Curve 9 (ALL(W1))'},
                  {name: 'Curve 10 (ALL(W1))'},
                ]
              },
              {
                name: 'Curve Group 1 (W1)',
                children:[
                  {name: 'Curve 1 (CG1(W1))'},
                  {name: 'Curve 2 (CG1(W1))'},
                  {name: 'Curve 3 (CG1(W1))'},
                  {name: 'Curve 4 (CG1(W1))'},
                  {name: 'Curve 5 (CG1(W1))'},
                  {name: 'Curve 6 (CG1(W1))'},
                  {name: 'Curve 7 (CG1(W1))'},
                  {name: 'Curve 8 (CG1(W1))'},
                  {name: 'Curve 9 (CG1(W1))'},
                  {name: 'Curve 10 (CG1(W1))'},
                ]
              },
              {
                name: 'Curve Group 2 (W1)',
                children:[
                  {name: 'Curve 2 (CG2(W1))'},
                  {name: 'Curve 4 (CG2(W1))'},
                  {name: 'Curve 6 (CG2(W1))'},
                  {name: 'Curve 8 (CG2(W1))'},
                  {name: 'Curve 10 (CG2(W1))'},
                ]
              },
              {
                name: 'Curve Group 3 (W1)',
                children:[
                  {name: 'Curve 3 (CG3(W1))'},
                  {name: 'Curve 6 (CG3(W1))'},
                  {name: 'Curve 9 (CG3(W1))'},
                ]
              },
              {
                name: 'Curve Group 4 (W1)',
                children:[
                  {name: 'Curve 4 (CG4(W1))'},
                  {name: 'Curve 8 (CG4(W1))'},
                ]
              },
              {
                name: 'Curve Group 5 (W1)',
                children:[
                  {name: 'Curve 5 (CG5(W1))'},
                  {name: 'Curve 10 (CG5(W1))'},
                ]
              },
            ]
          },
          {
            name:'Tops',
            children: [
              {
                name: 'All Tops (W1)',
                children:[
                  {name: 'Top 1 (ALL(W1))'},
                  {name: 'Top 2 (ALL(W1))'},
                  {name: 'Top 3 (ALL(W1))'},
                  {name: 'Top 4 (ALL(W1))'},
                  {name: 'Top 5 (ALL(W1))'},
                  {name: 'Top 6 (ALL(W1))'},
                  {name: 'Top 7 (ALL(W1))'},
                  {name: 'Top 8 (ALL(W1))'},
                  {name: 'Top 9 (ALL(W1))'},
                  {name: 'Top 10 (ALL(W1))'},
                ]
              },
              {
                name: 'Top Group 1 (W1)',
                children:[
                  {name: 'Top 1 (TG1(W1))'},
                  {name: 'Top 2 (TG1(W1))'},
                  {name: 'Top 3 (TG1(W1))'},
                  {name: 'Top 4 (TG1(W1))'},
                  {name: 'Top 5 (TG1(W1))'},
                  {name: 'Top 6 (TG1(W1))'},
                  {name: 'Top 7 (TG1(W1))'},
                  {name: 'Top 8 (TG1(W1))'},
                  {name: 'Top 9 (TG1(W1))'},
                  {name: 'Top 10 (TG1(W1))'},
                ]
              },
              {
                name: 'Top Group 2 (W1)',
                children:[
                  {name: 'Top 2 (TG2(W1))'},
                  {name: 'Top 4 (TG2(W1))'},
                  {name: 'Top 6 (TG2(W1))'},
                  {name: 'Top 8 (TG2(W1))'},
                  {name: 'Top 10 (TG2(W1))'},
                ]
              },
              {
                name: 'Top Group 3 (W1)',
                children:[
                  {name: 'Top 3 (TG3(W1))'},
                  {name: 'Top 6 (TG3(W1))'},
                  {name: 'Top 9 (TG3(W1))'},
                ]
              },
              {
                name: 'Top Group 4 (W1)',
                children:[
                  {name: 'Top 4 (TG4(W1))'},
                  {name: 'Top 8 (TG4(W1))'},
                ]
              },
              {
                name: 'Top Group 5 (W1)',
                children:[
                  {name: 'Top 5 (TG5(W1))'},
                  {name: 'Top 10 (TG5(W1))'},
                ]
              },
            ]            
          },
          {
            name:'Runs',
            children: [
              {
                name: 'All Runs (W1)',
                children:[
                  {name: 'Runs 1 (ALL(W1))'},
                  {name: 'Runs 2 (ALL(W1))'},
                  {name: 'Runs 3 (ALL(W1))'},
                  {name: 'Runs 4 (ALL(W1))'},
                  {name: 'Runs 5 (ALL(W1))'},
                  {name: 'Runs 6 (ALL(W1))'},
                  {name: 'Runs 7 (ALL(W1))'},
                  {name: 'Runs 8 (ALL(W1))'},
                  {name: 'Runs 9 (ALL(W1))'},
                  {name: 'Runs 10 (ALL(W1))'},
                ]
              },
              {
                name: 'Run Group 1 (W1)',
                children:[
                  {name: 'Run 1 (RG1(W1))'},
                  {name: 'Run 2 (RG1(W1))'},
                  {name: 'Run 3 (RG1(W1))'},
                  {name: 'Run 4 (RG1(W1))'},
                  {name: 'Run 5 (RG1(W1))'},
                  {name: 'Run 6 (RG1(W1))'},
                  {name: 'Run 7 (RG1(W1))'},
                  {name: 'Run 8 (RG1(W1))'},
                  {name: 'Run 9 (RG1(W1))'},
                  {name: 'Run 10 (RG1(W1))'},
                ]
              },
              {
                name: 'Run Group 2 (W1)',
                children:[
                  {name: 'Run 2 (RG2(W1))'},
                  {name: 'Run 4 (RG2(W1))'},
                  {name: 'Run 6 (RG2(W1))'},
                  {name: 'Run 8 (RG2(W1))'},
                  {name: 'Run 10 (RG2(W1))'},
                ]
              },
              {
                name: 'Run Group 3 (W1)',
                children:[
                  {name: 'Run 3 (RG3(W1))'},
                  {name: 'Run 6 (RG3(W1))'},
                  {name: 'Run 9 (RG3(W1))'},
                ]
              },
              {
                name: 'Run Group 4 (W1)',
                children:[
                  {name: 'Run 4 (RG4(W1))'},
                  {name: 'Run 8 (RG4(W1))'},
                ]
              },
              {
                name: 'Run Group 5 (W1)',
                children:[
                  {name: 'Run 5 (RG5(W1))'},
                  {name: 'Run 10 (RG5(W1))'},
                ]
              },
            ]            
          },
        ]
      },
      {
        name: 'Well2',
        children:[
          {
            name:'Curves W2',
            children: [
              {
                name: 'All Curves (W2)',
                children:[
                  {name: 'Curve 1 (ALL(W2))'},
                  {name: 'Curve 2 (ALL(W2))'},
                  {name: 'Curve 3 (ALL(W2))'},
                  {name: 'Curve 4 (ALL(W2))'},
                  {name: 'Curve 5 (ALL(W2))'},
                  {name: 'Curve 6 (ALL(W2))'},
                  {name: 'Curve 7 (ALL(W2))'},
                  {name: 'Curve 8 (ALL(W2))'},
                  {name: 'Curve 9 (ALL(W2))'},
                  {name: 'Curve 10 (ALL(W2))'},
                ]
              },
              {
                name: 'Curve Group 1 (W2)',
                children:[
                  {name: 'Curve 1 (CG1(W2))'},
                  {name: 'Curve 2 (CG1(W2))'},
                  {name: 'Curve 3 (CG1(W2))'},
                  {name: 'Curve 4 (CG1(W2))'},
                  {name: 'Curve 5 (CG1(W2))'},
                  {name: 'Curve 6 (CG1(W2))'},
                  {name: 'Curve 7 (CG1(W2))'},
                  {name: 'Curve 8 (CG1(W2))'},
                  {name: 'Curve 9 (CG1(W2))'},
                  {name: 'Curve 10 (CG1(W2))'},
                ]
              },
              {
                name: 'Curve Group 2 (W2)',
                children:[
                  {name: 'Curve 2 (CG2(W2))'},
                  {name: 'Curve 4 (CG2(W2))'},
                  {name: 'Curve 6 (CG2(W2))'},
                  {name: 'Curve 8 (CG2(W2))'},
                  {name: 'Curve 10 (CG2(W2))'},
                ]
              },
              {
                name: 'Curve Group 3 (W2)',
                children:[
                  {name: 'Curve 3 (CG3(W2))'},
                  {name: 'Curve 6 (CG3(W2))'},
                  {name: 'Curve 9 (CG3(W2))'},
                ]
              },
              {
                name: 'Curve Group 4 (W2)',
                children:[
                  {name: 'Curve 4 (CG4(W2))'},
                  {name: 'Curve 8 (CG4(W2))'},
                ]
              },
              {
                name: 'Curve Group 5 (W2)',
                children:[
                  {name: 'Curve 5 (CG5(W2))'},
                  {name: 'Curve 10 (CG5(W2))'},
                ]
              },
            ]
          },
          {
            name:'Tops',
            children: [
              {
                name: 'All Tops ()',
                children:[
                  {name: 'Top 1 (ALL(W2))'},
                  {name: 'Top 2 (ALL(W2))'},
                  {name: 'Top 3 (ALL(W2))'},
                  {name: 'Top 4 (ALL(W2))'},
                  {name: 'Top 5 (ALL(W2))'},
                  {name: 'Top 6 (ALL(W2))'},
                  {name: 'Top 7 (ALL(W2))'},
                  {name: 'Top 8 (ALL(W2))'},
                  {name: 'Top 9 (ALL(W2))'},
                  {name: 'Top 10 (ALL(W2))'},
                ]
              },
              {
                name: 'Top Group 1 (W2)',
                children:[
                  {name: 'Top 1 (TG1(W2))'},
                  {name: 'Top 2 (TG1(W2))'},
                  {name: 'Top 3 (TG1(W2))'},
                  {name: 'Top 4 (TG1(W2))'},
                  {name: 'Top 5 (TG1(W2))'},
                  {name: 'Top 6 (TG1(W2))'},
                  {name: 'Top 7 (TG1(W2))'},
                  {name: 'Top 8 (TG1(W2))'},
                  {name: 'Top 9 (TG1(W2))'},
                  {name: 'Top 10 (TG1(W2))'},
                ]
              },
              {
                name: 'Top Group 2 (W2)',
                children:[
                  {name: 'Top 2 (TG2(W2))'},
                  {name: 'Top 4 (TG2(W2))'},
                  {name: 'Top 6 (TG2(W2))'},
                  {name: 'Top 8 (TG2(W2))'},
                  {name: 'Top 10 (TG2(W2))'},
                ]
              },
              {
                name: 'Top Group 3 (W2)',
                children:[
                  {name: 'Top 3 (TG3(W2))'},
                  {name: 'Top 6 (TG3(W2))'},
                  {name: 'Top 9 (TG3(W2))'},
                ]
              },
              {
                name: 'Top Group 4 (W2)',
                children:[
                  {name: 'Top 4 (TG4(W2))'},
                  {name: 'Top 8 (TG4(W2))'},
                ]
              },
              {
                name: 'Top Group 5 (W2)',
                children:[
                  {name: 'Top 5 (TG5(W2))'},
                  {name: 'Top 10 (TG5(W2))'},
                ]
              },
            ]            
          },
          {
            name:'Runs',
            children: [
              {
                name: 'All Runs (W2)',
                children:[
                  {name: 'Runs 1 (ALL(W2))'},
                  {name: 'Runs 2 (ALL(W2))'},
                  {name: 'Runs 3 (ALL(W2))'},
                  {name: 'Runs 4 (ALL(W2))'},
                  {name: 'Runs 5 (ALL(W2))'},
                  {name: 'Runs 6 (ALL(W2))'},
                  {name: 'Runs 7 (ALL(W2))'},
                  {name: 'Runs 8 (ALL(W2))'},
                  {name: 'Runs 9 (ALL(W2))'},
                  {name: 'Runs 10 (ALL(W2))'},
                ]
              },
              {
                name: 'Run Group 1 (W2)',
                children:[
                  {name: 'Run 1 (RG1(W2))'},
                  {name: 'Run 2 (RG1(W2))'},
                  {name: 'Run 3 (RG1(W2))'},
                  {name: 'Run 4 (RG1(W2))'},
                  {name: 'Run 5 (RG1(W2))'},
                  {name: 'Run 6 (RG1(W2))'},
                  {name: 'Run 7 (RG1(W2))'},
                  {name: 'Run 8 (RG1(W2))'},
                  {name: 'Run 9 (RG1(W2))'},
                  {name: 'Run 10 (RG1(W2))'},
                ]
              },
              {
                name: 'Run Group 2 (W2)',
                children:[
                  {name: 'Run 2 (RG2(W2))'},
                  {name: 'Run 4 (RG2(W2))'},
                  {name: 'Run 6 (RG2(W2))'},
                  {name: 'Run 8 (RG2(W2))'},
                  {name: 'Run 10 (RG2(W2))'},
                ]
              },
              {
                name: 'Run Group 3 (W2)',
                children:[
                  {name: 'Run 3 (RG3(W2))'},
                  {name: 'Run 6 (RG3(W2))'},
                  {name: 'Run 9 (RG3(W2))'},
                ]
              },
              {
                name: 'Run Group 4 (W2)',
                children:[
                  {name: 'Run 4 (RG4(W2))'},
                  {name: 'Run 8 (RG4(W2))'},
                ]
              },
              {
                name: 'Run Group 5 (W2)',
                children:[
                  {name: 'Run 5 (RG5(W2))'},
                  {name: 'Run 10 (RG5(W2))'},
                ]
              },
            ]            
          },
        ]
      },
      {
        name: 'Well3',
        children:[
          {
            name:'Curves W3',
            children: [
              {
                name: 'All Curves (W3)',
                children:[
                  {name: 'Curve 1 (ALL(W3))'},
                  {name: 'Curve 2 (ALL(W3))'},
                  {name: 'Curve 3 (ALL(W3))'},
                  {name: 'Curve 4 (ALL(W3))'},
                  {name: 'Curve 5 (ALL(W3))'},
                  {name: 'Curve 6 (ALL(W3))'},
                  {name: 'Curve 7 (ALL(W3))'},
                  {name: 'Curve 8 (ALL(W3))'},
                  {name: 'Curve 9 (ALL(W3))'},
                  {name: 'Curve 10 (ALL(W3))'},
                ]
              },
              {
                name: 'Curve Group 1 (W3)',
                children:[
                  {name: 'Curve 1 (CG1(W3))'},
                  {name: 'Curve 2 (CG1(W3))'},
                  {name: 'Curve 3 (CG1(W3))'},
                  {name: 'Curve 4 (CG1(W3))'},
                  {name: 'Curve 5 (CG1(W3))'},
                  {name: 'Curve 6 (CG1(W3))'},
                  {name: 'Curve 7 (CG1(W3))'},
                  {name: 'Curve 8 (CG1(W3))'},
                  {name: 'Curve 9 (CG1(W3))'},
                  {name: 'Curve 10 (CG1(W3))'},
                ]
              },
              {
                name: 'Curve Group 2 (W3)',
                children:[
                  {name: 'Curve 2 (CG2(W3))'},
                  {name: 'Curve 4 (CG2(W3))'},
                  {name: 'Curve 6 (CG2(W3))'},
                  {name: 'Curve 8 (CG2(W3))'},
                  {name: 'Curve 10 (CG2(W3))'},
                ]
              },
              {
                name: 'Curve Group 3 (W3)',
                children:[
                  {name: 'Curve 3 (CG3(W3))'},
                  {name: 'Curve 6 (CG3(W3))'},
                  {name: 'Curve 9 (CG3(W3))'},
                ]
              },
              {
                name: 'Curve Group 4 (W3)',
                children:[
                  {name: 'Curve 4 (CG4(W3))'},
                  {name: 'Curve 8 (CG4(W3))'},
                ]
              },
              {
                name: 'Curve Group 5 (W3)',
                children:[
                  {name: 'Curve 5 (CG5(W3))'},
                  {name: 'Curve 10 (CG5(W3))'},
                ]
              },
            ]
          },
          {
            name:'Tops',
            children: [
              {
                name: 'All Tops (W3)',
                children:[
                  {name: 'Top 1 (ALL(W3))'},
                  {name: 'Top 2 (ALL(W3))'},
                  {name: 'Top 3 (ALL(W3))'},
                  {name: 'Top 4 (ALL(W3))'},
                  {name: 'Top 5 (ALL(W3))'},
                  {name: 'Top 6 (ALL(W3))'},
                  {name: 'Top 7 (ALL(W3))'},
                  {name: 'Top 8 (ALL(W3))'},
                  {name: 'Top 9 (ALL(W3))'},
                  {name: 'Top 10 (ALL(W3))'},
                ]
              },
              {
                name: 'Top Group 1 (W3)',
                children:[
                  {name: 'Top 1 (TG1(W3))'},
                  {name: 'Top 2 (TG1(W3))'},
                  {name: 'Top 3 (TG1(W3))'},
                  {name: 'Top 4 (TG1(W3))'},
                  {name: 'Top 5 (TG1(W3))'},
                  {name: 'Top 6 (TG1(W3))'},
                  {name: 'Top 7 (TG1(W3))'},
                  {name: 'Top 8 (TG1(W3))'},
                  {name: 'Top 9 (TG1(W3))'},
                  {name: 'Top 10 (TG1(W3))'},
                ]
              },
              {
                name: 'Top Group 2 (W3)',
                children:[
                  {name: 'Top 2 (TG2(W3))'},
                  {name: 'Top 4 (TG2(W3))'},
                  {name: 'Top 6 (TG2(W3))'},
                  {name: 'Top 8 (TG2(W3))'},
                  {name: 'Top 10 (TG2(W3))'},
                ]
              },
              {
                name: 'Top Group 3 (W3)',
                children:[
                  {name: 'Top 3 (TG3(W3))'},
                  {name: 'Top 6 (TG3(W3))'},
                  {name: 'Top 9 (TG3(W3))'},
                ]
              },
              {
                name: 'Top Group 4 (W3)',
                children:[
                  {name: 'Top 4 (TG4(W3))'},
                  {name: 'Top 8 (TG4(W3))'},
                ]
              },
              {
                name: 'Top Group 5 (W3)',
                children:[
                  {name: 'Top 5 (TG5(W3))'},
                  {name: 'Top 10 (TG5(W3))'},
                ]
              },
            ]            
          },
          {
            name:'Runs',
            children: [
              {
                name: 'All Runs (W3)',
                children:[
                  {name: 'Runs 1 (ALL(W3))'},
                  {name: 'Runs 2 (ALL(W3))'},
                  {name: 'Runs 3 (ALL(W3))'},
                  {name: 'Runs 4 (ALL(W3))'},
                  {name: 'Runs 5 (ALL(W3))'},
                  {name: 'Runs 6 (ALL(W3))'},
                  {name: 'Runs 7 (ALL(W3))'},
                  {name: 'Runs 8 (ALL(W3))'},
                  {name: 'Runs 9 (ALL(W3))'},
                  {name: 'Runs 10 (ALL(W3))'},
                ]
              },
              {
                name: 'Run Group 1 (W3)',
                children:[
                  {name: 'Run 1 (RG1(W3))'},
                  {name: 'Run 2 (RG1(W3))'},
                  {name: 'Run 3 (RG1(W3))'},
                  {name: 'Run 4 (RG1(W3))'},
                  {name: 'Run 5 (RG1(W3))'},
                  {name: 'Run 6 (RG1(W3))'},
                  {name: 'Run 7 (RG1(W3))'},
                  {name: 'Run 8 (RG1(W3))'},
                  {name: 'Run 9 (RG1(W3))'},
                  {name: 'Run 10 (RG1(W3))'},
                ]
              },
              {
                name: 'Run Group 2 (W3)',
                children:[
                  {name: 'Run 2 (RG2(W3))'},
                  {name: 'Run 4 (RG2(W3))'},
                  {name: 'Run 6 (RG2(W3))'},
                  {name: 'Run 8 (RG2(W3))'},
                  {name: 'Run 10 (RG2(W3))'},
                ]
              },
              {
                name: 'Run Group 3 (W3)',
                children:[
                  {name: 'Run 3 (RG3(W3))'},
                  {name: 'Run 6 (RG3(W3))'},
                  {name: 'Run 9 (RG3(W3))'},
                ]
              },
              {
                name: 'Run Group 4 (W3)',
                children:[
                  {name: 'Run 4 (RG4(W3))'},
                  {name: 'Run 8 (RG4(W3))'},
                ]
              },
              {
                name: 'Run Group 5 (W3)',
                children:[
                  {name: 'Run 5 (RG5(W3))'},
                  {name: 'Run 10 (RG5(W3))'},
                ]
              },
            ]            
          },
        ]
      },
      {
        name: 'Well4',
        children:[
          {
            name:'Curves ',
            children: [
              {
                name: 'All Curves (W4)',
                children:[
                  {name: 'Curve 1 (ALL(W4))'},
                  {name: 'Curve 2 (ALL(W4))'},
                  {name: 'Curve 3 (ALL(W4))'},
                  {name: 'Curve 4 (ALL(W4))'},
                  {name: 'Curve 5 (ALL(W4))'},
                  {name: 'Curve 6 (ALL(W4))'},
                  {name: 'Curve 7 (ALL(W4))'},
                  {name: 'Curve 8 (ALL(W4))'},
                  {name: 'Curve 9 (ALL(W4))'},
                  {name: 'Curve 10 (ALL(W4))'},
                ]
              },
              {
                name: 'Curve Group 1 (W4)',
                children:[
                  {name: 'Curve 1 (CG1(W4))'},
                  {name: 'Curve 2 (CG1(W4))'},
                  {name: 'Curve 3 (CG1(W4))'},
                  {name: 'Curve 4 (CG1(W4))'},
                  {name: 'Curve 5 (CG1(W4))'},
                  {name: 'Curve 6 (CG1(W4))'},
                  {name: 'Curve 7 (CG1(W4))'},
                  {name: 'Curve 8 (CG1(W4))'},
                  {name: 'Curve 9 (CG1(W4))'},
                  {name: 'Curve 10 (CG1(W4))'},
                ]
              },
              {
                name: 'Curve Group 2 (W4)',
                children:[
                  {name: 'Curve 2 (CG2(W4))'},
                  {name: 'Curve 4 (CG2(W4))'},
                  {name: 'Curve 6 (CG2(W4))'},
                  {name: 'Curve 8 (CG2(W4))'},
                  {name: 'Curve 10 (CG2(W4))'},
                ]
              },
              {
                name: 'Curve Group 3 (W4)',
                children:[
                  {name: 'Curve 3 (CG3(W4))'},
                  {name: 'Curve 6 (CG3(W4))'},
                  {name: 'Curve 9 (CG3(W4))'},
                ]
              },
              {
                name: 'Curve Group 4 (W4)',
                children:[
                  {name: 'Curve 4 (CG4(W4))'},
                  {name: 'Curve 8 (CG4(W4))'},
                ]
              },
              {
                name: 'Curve Group 5 (W4)',
                children:[
                  {name: 'Curve 5 (CG5(W4))'},
                  {name: 'Curve 10 (CG5(W4))'},
                ]
              },
            ]
          },
          {
            name:'Tops',
            children: [
              {
                name: 'All Tops (W4)',
                children:[
                  {name: 'Top 1 (ALL(W4))'},
                  {name: 'Top 2 (ALL(W4))'},
                  {name: 'Top 3 (ALL(W4))'},
                  {name: 'Top 4 (ALL(W4))'},
                  {name: 'Top 5 (ALL(W4))'},
                  {name: 'Top 6 (ALL(W4))'},
                  {name: 'Top 7 (ALL(W4))'},
                  {name: 'Top 8 (ALL(W4))'},
                  {name: 'Top 9 (ALL(W4))'},
                  {name: 'Top 10 (ALL(W4))'},
                ]
              },
              {
                name: 'Top Group 1 (W4)',
                children:[
                  {name: 'Top 1 (TG1(W4))'},
                  {name: 'Top 2 (TG1(W4))'},
                  {name: 'Top 3 (TG1(W4))'},
                  {name: 'Top 4 (TG1(W4))'},
                  {name: 'Top 5 (TG1(W4))'},
                  {name: 'Top 6 (TG1(W4))'},
                  {name: 'Top 7 (TG1(W4))'},
                  {name: 'Top 8 (TG1(W4))'},
                  {name: 'Top 9 (TG1(W4))'},
                  {name: 'Top 10 (TG1(W4))'},
                ]
              },
              {
                name: 'Top Group 2 (W4)',
                children:[
                  {name: 'Top 2 (TG2(W4))'},
                  {name: 'Top 4 (TG2(W4))'},
                  {name: 'Top 6 (TG2(W4))'},
                  {name: 'Top 8 (TG2(W4))'},
                  {name: 'Top 10 (TG2(W4))'},
                ]
              },
              {
                name: 'Top Group 3 (W4)',
                children:[
                  {name: 'Top 3 (TG3(W4))'},
                  {name: 'Top 6 (TG3(W4))'},
                  {name: 'Top 9 (TG3(W4))'},
                ]
              },
              {
                name: 'Top Group 4 (W4)',
                children:[
                  {name: 'Top 4 (TG4(W4))'},
                  {name: 'Top 8 (TG4(W4))'},
                ]
              },
              {
                name: 'Top Group 5 (W4)',
                children:[
                  {name: 'Top 5 (TG5(W4))'},
                  {name: 'Top 10 (TG5(W4))'},
                ]
              },
            ]            
          },
          {
            name:'Runs',
            children: [
              {
                name: 'All Runs (W4)',
                children:[
                  {name: 'Runs 1 (ALL(W4))'},
                  {name: 'Runs 2 (ALL(W4))'},
                  {name: 'Runs 3 (ALL(W4))'},
                  {name: 'Runs 4 (ALL(W4))'},
                  {name: 'Runs 5 (ALL(W4))'},
                  {name: 'Runs 6 (ALL(W4))'},
                  {name: 'Runs 7 (ALL(W4))'},
                  {name: 'Runs 8 (ALL(W4))'},
                  {name: 'Runs 9 (ALL(W4))'},
                  {name: 'Runs 10 (ALL(W4))'},
                ]
              },
              {
                name: 'Run Group 1 (W4)',
                children:[
                  {name: 'Run 1 (RG1(W4))'},
                  {name: 'Run 2 (RG1(W4))'},
                  {name: 'Run 3 (RG1(W4))'},
                  {name: 'Run 4 (RG1(W4))'},
                  {name: 'Run 5 (RG1(W4))'},
                  {name: 'Run 6 (RG1(W4))'},
                  {name: 'Run 7 (RG1(W4))'},
                  {name: 'Run 8 (RG1(W4))'},
                  {name: 'Run 9 (RG1(W4))'},
                  {name: 'Run 10 (RG1(W4))'},
                ]
              },
              {
                name: 'Run Group 2 (W4)',
                children:[
                  {name: 'Run 2 (RG2(W4))'},
                  {name: 'Run 4 (RG2(W4))'},
                  {name: 'Run 6 (RG2(W4))'},
                  {name: 'Run 8 (RG2(W4))'},
                  {name: 'Run 10 (RG2(W4))'},
                ]
              },
              {
                name: 'Run Group 3 (W4)',
                children:[
                  {name: 'Run 3 (RG3(W4))'},
                  {name: 'Run 6 (RG3(W4))'},
                  {name: 'Run 9 (RG3(W4))'},
                ]
              },
              {
                name: 'Run Group 4 (W4)',
                children:[
                  {name: 'Run 4 (RG4(W4))'},
                  {name: 'Run 8 (RG4(W4))'},
                ]
              },
              {
                name: 'Run Group 5 (W4)',
                children:[
                  {name: 'Run 5 (RG5(W4))'},
                  {name: 'Run 10 (RG5(W4))'},
                ]
              },
            ]            
          },
        ]
      },
      {
        name: 'Well5',
        children:[
          {
            name:'Curves ',
            children: [
              {
                name: 'All Curves (W5)',
                children:[
                  {name: 'Curve 1 (ALL(W5))'},
                  {name: 'Curve 2 (ALL(W5))'},
                  {name: 'Curve 3 (ALL(W5))'},
                  {name: 'Curve 4 (ALL(W5))'},
                  {name: 'Curve 5 (ALL(W5))'},
                  {name: 'Curve 6 (ALL(W5))'},
                  {name: 'Curve 7 (ALL(W5))'},
                  {name: 'Curve 8 (ALL(W5))'},
                  {name: 'Curve 9 (ALL(W5))'},
                  {name: 'Curve 10 (ALL(W5))'},
                ]
              },
              {
                name: 'Curve Group 1 (W5)',
                children:[
                  {name: 'Curve 1 (CG1(W5))'},
                  {name: 'Curve 2 (CG1(W5))'},
                  {name: 'Curve 3 (CG1(W5))'},
                  {name: 'Curve 4 (CG1(W5))'},
                  {name: 'Curve 5 (CG1(W5))'},
                  {name: 'Curve 6 (CG1(W5))'},
                  {name: 'Curve 7 (CG1(W5))'},
                  {name: 'Curve 8 (CG1(W5))'},
                  {name: 'Curve 9 (CG1(W5))'},
                  {name: 'Curve 10 (CG1(W5))'},
                ]
              },
              {
                name: 'Curve Group 2 (W5)',
                children:[
                  {name: 'Curve 2 (CG2(W5))'},
                  {name: 'Curve 4 (CG2(W5))'},
                  {name: 'Curve 6 (CG2(W5))'},
                  {name: 'Curve 8 (CG2(W5))'},
                  {name: 'Curve 10 (CG2(W5))'},
                ]
              },
              {
                name: 'Curve Group 3 (W5)',
                children:[
                  {name: 'Curve 3 (CG3(W5))'},
                  {name: 'Curve 6 (CG3(W5))'},
                  {name: 'Curve 9 (CG3(W5))'},
                ]
              },
              {
                name: 'Curve Group 4 (W5)',
                children:[
                  {name: 'Curve 4 (CG4(W5))'},
                  {name: 'Curve 8 (CG4(W5))'},
                ]
              },
              {
                name: 'Curve Group 5 (W5)',
                children:[
                  {name: 'Curve 5 (CG5(W5))'},
                  {name: 'Curve 10 (CG5(W5))'},
                ]
              },
            ]
          },
          {
            name:'Tops',
            children: [
              {
                name: 'All Tops (W5)',
                children:[
                  {name: 'Top 1 (ALL(W5))'},
                  {name: 'Top 2 (ALL(W5))'},
                  {name: 'Top 3 (ALL(W5))'},
                  {name: 'Top 4 (ALL(W5))'},
                  {name: 'Top 5 (ALL(W5))'},
                  {name: 'Top 6 (ALL(W5))'},
                  {name: 'Top 7 (ALL(W5))'},
                  {name: 'Top 8 (ALL(W5))'},
                  {name: 'Top 9 (ALL(W5))'},
                  {name: 'Top 10 (ALL(W5))'},
                ]
              },
              {
                name: 'Top Group 1 (W5)',
                children:[
                  {name: 'Top 1 (TG1(W5))'},
                  {name: 'Top 2 (TG1(W5))'},
                  {name: 'Top 3 (TG1(W5))'},
                  {name: 'Top 4 (TG1(W5))'},
                  {name: 'Top 5 (TG1(W5))'},
                  {name: 'Top 6 (TG1(W5))'},
                  {name: 'Top 7 (TG1(W5))'},
                  {name: 'Top 8 (TG1(W5))'},
                  {name: 'Top 9 (TG1(W5))'},
                  {name: 'Top 10 (TG1(W5))'},
                ]
              },
              {
                name: 'Top Group 2 (W5)',
                children:[
                  {name: 'Top 2 (TG2(W5))'},
                  {name: 'Top 4 (TG2(W5))'},
                  {name: 'Top 6 (TG2(W5))'},
                  {name: 'Top 8 (TG2(W5))'},
                  {name: 'Top 10 (TG2(W5))'},
                ]
              },
              {
                name: 'Top Group 3 (W5)',
                children:[
                  {name: 'Top 3 (TG3(W5))'},
                  {name: 'Top 6 (TG3(W5))'},
                  {name: 'Top 9 (TG3(W5))'},
                ]
              },
              {
                name: 'Top Group 4 (W5)',
                children:[
                  {name: 'Top 4 (TG4(W5))'},
                  {name: 'Top 8 (TG4(W5))'},
                ]
              },
              {
                name: 'Top Group 5 (W5)',
                children:[
                  {name: 'Top 5 (TG5(W5))'},
                  {name: 'Top 10 (TG5(W5))'},
                ]
              },
            ]            
          },
          {
            name:'Runs',
            children: [
              {
                name: 'All Runs (W5)',
                children:[
                  {name: 'Runs 1 (ALL(W5))'},
                  {name: 'Runs 2 (ALL(W5))'},
                  {name: 'Runs 3 (ALL(W5))'},
                  {name: 'Runs 4 (ALL(W5))'},
                  {name: 'Runs 5 (ALL(W5))'},
                  {name: 'Runs 6 (ALL(W5))'},
                  {name: 'Runs 7 (ALL(W5))'},
                  {name: 'Runs 8 (ALL(W5))'},
                  {name: 'Runs 9 (ALL(W5))'},
                  {name: 'Runs 10 (ALL(W5))'},
                ]
              },
              {
                name: 'Run Group 1 (W5)',
                children:[
                  {name: 'Run 1 (RG1(W5))'},
                  {name: 'Run 2 (RG1(W5))'},
                  {name: 'Run 3 (RG1(W5))'},
                  {name: 'Run 4 (RG1(W5))'},
                  {name: 'Run 5 (RG1(W5))'},
                  {name: 'Run 6 (RG1(W5))'},
                  {name: 'Run 7 (RG1(W5))'},
                  {name: 'Run 8 (RG1(W5))'},
                  {name: 'Run 9 (RG1(W5))'},
                  {name: 'Run 10 (RG1(W5))'},
                ]
              },
              {
                name: 'Run Group 2 (W5)',
                children:[
                  {name: 'Run 2 (RG2(W5))'},
                  {name: 'Run 4 (RG2(W5))'},
                  {name: 'Run 6 (RG2(W5))'},
                  {name: 'Run 8 (RG2(W5))'},
                  {name: 'Run 10 (RG2(W5))'},
                ]
              },
              {
                name: 'Run Group 3 (W5)',
                children:[
                  {name: 'Run 3 (RG3(W5))'},
                  {name: 'Run 6 (RG3(W5))'},
                  {name: 'Run 9 (RG3(W5))'},
                ]
              },
              {
                name: 'Run Group 4 (W5)',
                children:[
                  {name: 'Run 4 (RG4(W5))'},
                  {name: 'Run 8 (RG4(W5))'},
                ]
              },
              {
                name: 'Run Group 5 (W5)',
                children:[
                  {name: 'Run 5 (RG5(W5))'},
                  {name: 'Run 10 (RG5(W5))'},
                ]
              },
            ]            
          },
        ]
      },
      {
        name: 'Well6',
        children:[
          {
            name:'Curves ',
            children: [
              {
                name: 'All Curves (W6)',
                children:[
                  {name: 'Curve 1 (ALL(W6))'},
                  {name: 'Curve 2 (ALL(W6))'},
                  {name: 'Curve 3 (ALL(W6))'},
                  {name: 'Curve 4 (ALL(W6))'},
                  {name: 'Curve 5 (ALL(W6))'},
                  {name: 'Curve 6 (ALL(W6))'},
                  {name: 'Curve 7 (ALL(W6))'},
                  {name: 'Curve 8 (ALL(W6))'},
                  {name: 'Curve 9 (ALL(W6))'},
                  {name: 'Curve 10 (ALL(W6))'},
                ]
              },
              {
                name: 'Curve Group 1 (W6)',
                children:[
                  {name: 'Curve 1 (CG1(W6))'},
                  {name: 'Curve 2 (CG1(W6))'},
                  {name: 'Curve 3 (CG1(W6))'},
                  {name: 'Curve 4 (CG1(W6))'},
                  {name: 'Curve 5 (CG1(W6))'},
                  {name: 'Curve 6 (CG1(W6))'},
                  {name: 'Curve 7 (CG1(W6))'},
                  {name: 'Curve 8 (CG1(W6))'},
                  {name: 'Curve 9 (CG1(W6))'},
                  {name: 'Curve 10 (CG1(W6))'},
                ]
              },
              {
                name: 'Curve Group 2 (W6)',
                children:[
                  {name: 'Curve 2 (CG2(W6))'},
                  {name: 'Curve 4 (CG2(W6))'},
                  {name: 'Curve 6 (CG2(W6))'},
                  {name: 'Curve 8 (CG2(W6))'},
                  {name: 'Curve 10 (CG2(W6))'},
                ]
              },
              {
                name: 'Curve Group 3 (W6)',
                children:[
                  {name: 'Curve 3 (CG3(W6))'},
                  {name: 'Curve 6 (CG3(W6))'},
                  {name: 'Curve 9 (CG3(W6))'},
                ]
              },
              {
                name: 'Curve Group 4 (W6)',
                children:[
                  {name: 'Curve 4 (CG4(W6))'},
                  {name: 'Curve 8 (CG4(W6))'},
                ]
              },
              {
                name: 'Curve Group 5 (W6)',
                children:[
                  {name: 'Curve 5 (CG5(W6))'},
                  {name: 'Curve 10 (CG5(W6))'},
                ]
              },
            ]
          },
          {
            name:'Tops',
            children: [
              {
                name: 'All Tops (W6)',
                children:[
                  {name: 'Top 1 (ALL(W6))'},
                  {name: 'Top 2 (ALL(W6))'},
                  {name: 'Top 3 (ALL(W6))'},
                  {name: 'Top 4 (ALL(W6))'},
                  {name: 'Top 5 (ALL(W6))'},
                  {name: 'Top 6 (ALL(W6))'},
                  {name: 'Top 7 (ALL(W6))'},
                  {name: 'Top 8 (ALL(W6))'},
                  {name: 'Top 9 (ALL(W6))'},
                  {name: 'Top 10 (ALL(W6))'},
                ]
              },
              {
                name: 'Top Group 1 (W6)',
                children:[
                  {name: 'Top 1 (TG1(W6))'},
                  {name: 'Top 2 (TG1(W6))'},
                  {name: 'Top 3 (TG1(W6))'},
                  {name: 'Top 4 (TG1(W6))'},
                  {name: 'Top 5 (TG1(W6))'},
                  {name: 'Top 6 (TG1(W6))'},
                  {name: 'Top 7 (TG1(W6))'},
                  {name: 'Top 8 (TG1(W6))'},
                  {name: 'Top 9 (TG1(W6))'},
                  {name: 'Top 10 (TG1(W6))'},
                ]
              },
              {
                name: 'Top Group 2 (W6)',
                children:[
                  {name: 'Top 2 (TG2(W6))'},
                  {name: 'Top 4 (TG2(W6))'},
                  {name: 'Top 6 (TG2(W6))'},
                  {name: 'Top 8 (TG2(W6))'},
                  {name: 'Top 10 (TG2(W6))'},
                ]
              },
              {
                name: 'Top Group 3 (W6)',
                children:[
                  {name: 'Top 3 (TG3(W6))'},
                  {name: 'Top 6 (TG3(W6))'},
                  {name: 'Top 9 (TG3(W6))'},
                ]
              },
              {
                name: 'Top Group 4 (W6)',
                children:[
                  {name: 'Top 4 (TG4(W6))'},
                  {name: 'Top 8 (TG4(W6))'},
                ]
              },
              {
                name: 'Top Group 5 (W6)',
                children:[
                  {name: 'Top 5 (TG5(W6))'},
                  {name: 'Top 10 (TG5(W6))'},
                ]
              },
            ]            
          },
          {
            name:'Runs',
            children: [
              {
                name: 'All Runs (W6)',
                children:[
                  {name: 'Runs 1 (ALL(W6))'},
                  {name: 'Runs 2 (ALL(W6))'},
                  {name: 'Runs 3 (ALL(W6))'},
                  {name: 'Runs 4 (ALL(W6))'},
                  {name: 'Runs 5 (ALL(W6))'},
                  {name: 'Runs 6 (ALL(W6))'},
                  {name: 'Runs 7 (ALL(W6))'},
                  {name: 'Runs 8 (ALL(W6))'},
                  {name: 'Runs 9 (ALL(W6))'},
                  {name: 'Runs 10 (ALL(W6))'},
                ]
              },
              {
                name: 'Run Group 1 (W6)',
                children:[
                  {name: 'Run 1 (RG1(W6))'},
                  {name: 'Run 2 (RG1(W6))'},
                  {name: 'Run 3 (RG1(W6))'},
                  {name: 'Run 4 (RG1(W6))'},
                  {name: 'Run 5 (RG1(W6))'},
                  {name: 'Run 6 (RG1(W6))'},
                  {name: 'Run 7 (RG1(W6))'},
                  {name: 'Run 8 (RG1(W6))'},
                  {name: 'Run 9 (RG1(W6))'},
                  {name: 'Run 10 (RG1(W6))'},
                ]
              },
              {
                name: 'Run Group 2 (W6)',
                children:[
                  {name: 'Run 2 (RG2(W6))'},
                  {name: 'Run 4 (RG2(W6))'},
                  {name: 'Run 6 (RG2(W6))'},
                  {name: 'Run 8 (RG2(W6))'},
                  {name: 'Run 10 (RG2(W6))'},
                ]
              },
              {
                name: 'Run Group 3 (W6)',
                children:[
                  {name: 'Run 3 (RG3(W6))'},
                  {name: 'Run 6 (RG3(W6))'},
                  {name: 'Run 9 (RG3(W6))'},
                ]
              },
              {
                name: 'Run Group 4 (W6)',
                children:[
                  {name: 'Run 4 (RG4(W6))'},
                  {name: 'Run 8 (RG4(W6))'},
                ]
              },
              {
                name: 'Run Group 5 (W6)',
                children:[
                  {name: 'Run 5 (RG5(W6))'},
                  {name: 'Run 10 (RG5(W6))'},
                ]
              },
            ]            
          },
        ]
      },
      {
        name: 'Well7',
        children:[
          {
            name:'Curves ',
            children: [
              {
                name: 'All Curves (W7)',
                children:[
                  {name: 'Curve 1 (ALL(W7))'},
                  {name: 'Curve 2 (ALL(W7))'},
                  {name: 'Curve 3 (ALL(W7))'},
                  {name: 'Curve 4 (ALL(W7))'},
                  {name: 'Curve 5 (ALL(W7))'},
                  {name: 'Curve 6 (ALL(W7))'},
                  {name: 'Curve 7 (ALL(W7))'},
                  {name: 'Curve 8 (ALL(W7))'},
                  {name: 'Curve 9 (ALL(W7))'},
                  {name: 'Curve 10 (ALL(W7))'},
                ]
              },
              {
                name: 'Curve Group 1 (W7)',
                children:[
                  {name: 'Curve 1 (CG1(W7))'},
                  {name: 'Curve 2 (CG1(W7))'},
                  {name: 'Curve 3 (CG1(W7))'},
                  {name: 'Curve 4 (CG1(W7))'},
                  {name: 'Curve 5 (CG1(W7))'},
                  {name: 'Curve 6 (CG1(W7))'},
                  {name: 'Curve 7 (CG1(W7))'},
                  {name: 'Curve 8 (CG1(W7))'},
                  {name: 'Curve 9 (CG1(W7))'},
                  {name: 'Curve 10 (CG1(W7))'},
                ]
              },
              {
                name: 'Curve Group 2 (W7)',
                children:[
                  {name: 'Curve 2 (CG2(W7))'},
                  {name: 'Curve 4 (CG2(W7))'},
                  {name: 'Curve 6 (CG2(W7))'},
                  {name: 'Curve 8 (CG2(W7))'},
                  {name: 'Curve 10 (CG2(W7))'},
                ]
              },
              {
                name: 'Curve Group 3 (W7)',
                children:[
                  {name: 'Curve 3 (CG3(W7))'},
                  {name: 'Curve 6 (CG3(W7))'},
                  {name: 'Curve 9 (CG3(W7))'},
                ]
              },
              {
                name: 'Curve Group 4 (W7)',
                children:[
                  {name: 'Curve 4 (CG4(W7))'},
                  {name: 'Curve 8 (CG4(W7))'},
                ]
              },
              {
                name: 'Curve Group 5 (W7)',
                children:[
                  {name: 'Curve 5 (CG5(W7))'},
                  {name: 'Curve 10 (CG5(W7))'},
                ]
              },
            ]
          },
          {
            name:'Tops',
            children: [
              {
                name: 'All Tops (W7)',
                children:[
                  {name: 'Top 1 (ALL(W7))'},
                  {name: 'Top 2 (ALL(W7))'},
                  {name: 'Top 3 (ALL(W7))'},
                  {name: 'Top 4 (ALL(W))'},
                  {name: 'Top 5 (ALL(W7))'},
                  {name: 'Top 6 (ALL(W7))'},
                  {name: 'Top 7 (ALL(W7))'},
                  {name: 'Top 8 (ALL(W7))'},
                  {name: 'Top 9 (ALL(W7))'},
                  {name: 'Top 10 (ALL(W7))'},
                ]
              },
              {
                name: 'Top Group 1 (W7)',
                children:[
                  {name: 'Top 1 (TG1(W7))'},
                  {name: 'Top 2 (TG1(W7))'},
                  {name: 'Top 3 (TG1(W7))'},
                  {name: 'Top 4 (TG1(W7))'},
                  {name: 'Top 5 (TG1(W7))'},
                  {name: 'Top 6 (TG1(W7))'},
                  {name: 'Top 7 (TG1(W7))'},
                  {name: 'Top 8 (TG1(W7))'},
                  {name: 'Top 9 (TG1(W7))'},
                  {name: 'Top 10 (TG1(W7))'},
                ]
              },
              {
                name: 'Top Group 2 (W7)',
                children:[
                  {name: 'Top 2 (TG2(W7))'},
                  {name: 'Top 4 (TG2(W7))'},
                  {name: 'Top 6 (TG2(W7))'},
                  {name: 'Top 8 (TG2(W7))'},
                  {name: 'Top 10 (TG2(W7))'},
                ]
              },
              {
                name: 'Top Group 3 (W7)',
                children:[
                  {name: 'Top 3 (TG3(W7))'},
                  {name: 'Top 6 (TG3(W7))'},
                  {name: 'Top 9 (TG3(W7))'},
                ]
              },
              {
                name: 'Top Group 4 (W7)',
                children:[
                  {name: 'Top 4 (TG4(W7))'},
                  {name: 'Top 8 (TG4(W7))'},
                ]
              },
              {
                name: 'Top Group 5 (W7)',
                children:[
                  {name: 'Top 5 (TG5(W7))'},
                  {name: 'Top 10 (TG5(W7))'},
                ]
              },
            ]            
          },
          {
            name:'Runs',
            children: [
              {
                name: 'All Runs (W7)',
                children:[
                  {name: 'Runs 1 (ALL(W7))'},
                  {name: 'Runs 2 (ALL(W7))'},
                  {name: 'Runs 3 (ALL(W7))'},
                  {name: 'Runs 4 (ALL(W7))'},
                  {name: 'Runs 5 (ALL(W7))'},
                  {name: 'Runs 6 (ALL(W7))'},
                  {name: 'Runs 7 (ALL(W7))'},
                  {name: 'Runs 8 (ALL(W7))'},
                  {name: 'Runs 9 (ALL(W7))'},
                  {name: 'Runs 10 (ALL(W7))'},
                ]
              },
              {
                name: 'Run Group 1 (W7)',
                children:[
                  {name: 'Run 1 (RG1(W7))'},
                  {name: 'Run 2 (RG1(W7))'},
                  {name: 'Run 3 (RG1(W7))'},
                  {name: 'Run 4 (RG1(W7))'},
                  {name: 'Run 5 (RG1(W7))'},
                  {name: 'Run 6 (RG1(W7))'},
                  {name: 'Run 7 (RG1(W7))'},
                  {name: 'Run 8 (RG1(W7))'},
                  {name: 'Run 9 (RG1(W7))'},
                  {name: 'Run 10 (RG1(W7))'},
                ]
              },
              {
                name: 'Run Group 2 (W7)',
                children:[
                  {name: 'Run 2 (RG2(W7))'},
                  {name: 'Run 4 (RG2(W7))'},
                  {name: 'Run 6 (RG2(W7))'},
                  {name: 'Run 8 (RG2(W7))'},
                  {name: 'Run 10 (RG2(W7))'},
                ]
              },
              {
                name: 'Run Group 3 (W7)',
                children:[
                  {name: 'Run 3 (RG3(W7))'},
                  {name: 'Run 6 (RG3(W7))'},
                  {name: 'Run 9 (RG3(W7))'},
                ]
              },
              {
                name: 'Run Group 4 (W7)',
                children:[
                  {name: 'Run 4 (RG4(W7))'},
                  {name: 'Run 8 (RG4(W7))'},
                ]
              },
              {
                name: 'Run Group 5 (W7)',
                children:[
                  {name: 'Run 5 (RG5(W7))'},
                  {name: 'Run 10 (RG5(W7))'},
                ]
              },
            ]            
          },
        ]
      },
      {
        name: 'Well8',
        children:[
          {
            name:'Curves ',
            children: [
              {
                name: 'All Curves (W8)',
                children:[
                  {name: 'Curve 1 (ALL(W8))'},
                  {name: 'Curve 2 (ALL(W8))'},
                  {name: 'Curve 3 (ALL(W8))'},
                  {name: 'Curve 4 (ALL(W8))'},
                  {name: 'Curve 5 (ALL(W8))'},
                  {name: 'Curve 6 (ALL(W8))'},
                  {name: 'Curve 7 (ALL(W8))'},
                  {name: 'Curve 8 (ALL(W8))'},
                  {name: 'Curve 9 (ALL(W8))'},
                  {name: 'Curve 10 (ALL(W8))'},
                ]
              },
              {
                name: 'Curve Group 1 (W8)',
                children:[
                  {name: 'Curve 1 (CG1(W8))'},
                  {name: 'Curve 2 (CG1(W8))'},
                  {name: 'Curve 3 (CG1(W8))'},
                  {name: 'Curve 4 (CG1(W8))'},
                  {name: 'Curve 5 (CG1(W8))'},
                  {name: 'Curve 6 (CG1(W8))'},
                  {name: 'Curve 7 (CG1(W8))'},
                  {name: 'Curve 8 (CG1(W8))'},
                  {name: 'Curve 9 (CG1(W8))'},
                  {name: 'Curve 10 (CG1(W8))'},
                ]
              },
              {
                name: 'Curve Group 2 (W8)',
                children:[
                  {name: 'Curve 2 (CG2(W8))'},
                  {name: 'Curve 4 (CG2(W8))'},
                  {name: 'Curve 6 (CG2(W8))'},
                  {name: 'Curve 8 (CG2(W8))'},
                  {name: 'Curve 10 (CG2(W8))'},
                ]
              },
              {
                name: 'Curve Group 3 (W8)',
                children:[
                  {name: 'Curve 3 (CG3(W8))'},
                  {name: 'Curve 6 (CG3(W8))'},
                  {name: 'Curve 9 (CG3(W8))'},
                ]
              },
              {
                name: 'Curve Group 4 (W8)',
                children:[
                  {name: 'Curve 4 (CG4(W8))'},
                  {name: 'Curve 8 (CG4(W8))'},
                ]
              },
              {
                name: 'Curve Group 5 (W8)',
                children:[
                  {name: 'Curve 5 (CG5(W8))'},
                  {name: 'Curve 10 (CG5(W8))'},
                ]
              },
            ]
          },
          {
            name:'Tops',
            children: [
              {
                name: 'All Tops (W8)',
                children:[
                  {name: 'Top 1 (ALL(W8))'},
                  {name: 'Top 2 (ALL(W8))'},
                  {name: 'Top 3 (ALL(W8))'},
                  {name: 'Top 4 (ALL(W8))'},
                  {name: 'Top 5 (ALL(W8))'},
                  {name: 'Top 6 (ALL(W8))'},
                  {name: 'Top 7 (ALL(W8))'},
                  {name: 'Top 8 (ALL(W8))'},
                  {name: 'Top 9 (ALL(W8))'},
                  {name: 'Top 10 (ALL(W8))'},
                ]
              },
              {
                name: 'Top Group 1 (W8)',
                children:[
                  {name: 'Top 1 (TG1(W8))'},
                  {name: 'Top 2 (TG1(W8))'},
                  {name: 'Top 3 (TG1(W8))'},
                  {name: 'Top 4 (TG1(W8))'},
                  {name: 'Top 5 (TG1(W8))'},
                  {name: 'Top 6 (TG1(W8))'},
                  {name: 'Top 7 (TG1(W8))'},
                  {name: 'Top 8 (TG1(W8))'},
                  {name: 'Top 9 (TG1(W8))'},
                  {name: 'Top 10 (TG1(W8))'},
                ]
              },
              {
                name: 'Top Group 2 (W8)',
                children:[
                  {name: 'Top 2 (TG2(W8))'},
                  {name: 'Top 4 (TG2(W8))'},
                  {name: 'Top 6 (TG2(W8))'},
                  {name: 'Top 8 (TG2(W8))'},
                  {name: 'Top 10 (TG2(W8))'},
                ]
              },
              {
                name: 'Top Group 3 (W8)',
                children:[
                  {name: 'Top 3 (TG3(W8))'},
                  {name: 'Top 6 (TG3(W8))'},
                  {name: 'Top 9 (TG3(W8))'},
                ]
              },
              {
                name: 'Top Group 4 (W8)',
                children:[
                  {name: 'Top 4 (TG4(W8))'},
                  {name: 'Top 8 (TG4(W8))'},
                ]
              },
              {
                name: 'Top Group 5 (W8)',
                children:[
                  {name: 'Top 5 (TG5(W8))'},
                  {name: 'Top 10 (TG5(W8))'},
                ]
              },
            ]            
          },
          {
            name:'Runs',
            children: [
              {
                name: 'All Runs (W8)',
                children:[
                  {name: 'Runs 1 (ALL(W8))'},
                  {name: 'Runs 2 (ALL(W8))'},
                  {name: 'Runs 3 (ALL(W8))'},
                  {name: 'Runs 4 (ALL(W8))'},
                  {name: 'Runs 5 (ALL(W8))'},
                  {name: 'Runs 6 (ALL(W8))'},
                  {name: 'Runs 7 (ALL(W8))'},
                  {name: 'Runs 8 (ALL(W8))'},
                  {name: 'Runs 9 (ALL(W8))'},
                  {name: 'Runs 10 (ALL(W8))'},
                ]
              },
              {
                name: 'Run Group 1 (W8)',
                children:[
                  {name: 'Run 1 (RG1(W8))'},
                  {name: 'Run 2 (RG1(W8))'},
                  {name: 'Run 3 (RG1(W8))'},
                  {name: 'Run 4 (RG1(W8))'},
                  {name: 'Run 5 (RG1(W8))'},
                  {name: 'Run 6 (RG1(W8))'},
                  {name: 'Run 7 (RG1(W8))'},
                  {name: 'Run 8 (RG1(W8))'},
                  {name: 'Run 9 (RG1(W8))'},
                  {name: 'Run 10 (RG1(W8))'},
                ]
              },
              {
                name: 'Run Group 2 (W8)',
                children:[
                  {name: 'Run 2 (RG2(W8))'},
                  {name: 'Run 4 (RG2(W8))'},
                  {name: 'Run 6 (RG2(W8))'},
                  {name: 'Run 8 (RG2(W8))'},
                  {name: 'Run 10 (RG2(W8))'},
                ]
              },
              {
                name: 'Run Group 3 (W8)',
                children:[
                  {name: 'Run 3 (RG3(W8))'},
                  {name: 'Run 6 (RG3(W8))'},
                  {name: 'Run 9 (RG3(W8))'},
                ]
              },
              {
                name: 'Run Group 4 (W8)',
                children:[
                  {name: 'Run 4 (RG4(W8))'},
                  {name: 'Run 8 (RG4(W8))'},
                ]
              },
              {
                name: 'Run Group 5 (W8)',
                children:[
                  {name: 'Run 5 (RG5(W8))'},
                  {name: 'Run 10 (RG5(W8))'},
                ]
              },
            ]            
          },
        ]
      },
      {
        name: 'Well9',
        children:[
          {
            name:'Curves ',
            children: [
              {
                name: 'All Curves (W9)',
                children:[
                  {name: 'Curve 1 (ALL(W9))'},
                  {name: 'Curve 2 (ALL(W9))'},
                  {name: 'Curve 3 (ALL(W9))'},
                  {name: 'Curve 4 (ALL(W9))'},
                  {name: 'Curve 5 (ALL(W9))'},
                  {name: 'Curve 6 (ALL(W9))'},
                  {name: 'Curve 7 (ALL(W9))'},
                  {name: 'Curve 8 (ALL(W9))'},
                  {name: 'Curve 9 (ALL(W9))'},
                  {name: 'Curve 10 (ALL(W9))'},
                ]
              },
              {
                name: 'Curve Group 1 (W9)',
                children:[
                  {name: 'Curve 1 (CG1(W9))'},
                  {name: 'Curve 2 (CG1(W9))'},
                  {name: 'Curve 3 (CG1(W9))'},
                  {name: 'Curve 4 (CG1(W9))'},
                  {name: 'Curve 5 (CG1(W9))'},
                  {name: 'Curve 6 (CG1(W9))'},
                  {name: 'Curve 7 (CG1(W9))'},
                  {name: 'Curve 8 (CG1(W9))'},
                  {name: 'Curve 9 (CG1(W9))'},
                  {name: 'Curve 10 (CG1(W9))'},
                ]
              },
              {
                name: 'Curve Group 2 (W9)',
                children:[
                  {name: 'Curve 2 (CG2(W9))'},
                  {name: 'Curve 4 (CG2(W9))'},
                  {name: 'Curve 6 (CG2(W9))'},
                  {name: 'Curve 8 (CG2(W9))'},
                  {name: 'Curve 10 (CG2(W9))'},
                ]
              },
              {
                name: 'Curve Group 3 (W9)',
                children:[
                  {name: 'Curve 3 (CG3(W9))'},
                  {name: 'Curve 6 (CG3(W9))'},
                  {name: 'Curve 9 (CG3(W9))'},
                ]
              },
              {
                name: 'Curve Group 4 (W9)',
                children:[
                  {name: 'Curve 4 (CG4(W9))'},
                  {name: 'Curve 8 (CG4(W9))'},
                ]
              },
              {
                name: 'Curve Group 5 (W9)',
                children:[
                  {name: 'Curve 5 (CG5(W9))'},
                  {name: 'Curve 10 (CG5(W9))'},
                ]
              },
            ]
          },
          {
            name:'Tops',
            children: [
              {
                name: 'All Tops (W9)',
                children:[
                  {name: 'Top 1 (ALL(W9))'},
                  {name: 'Top 2 (ALL(W9))'},
                  {name: 'Top 3 (ALL(W9))'},
                  {name: 'Top 4 (ALL(W9))'},
                  {name: 'Top 5 (ALL(W9))'},
                  {name: 'Top 6 (ALL(W9))'},
                  {name: 'Top 7 (ALL(W9))'},
                  {name: 'Top 8 (ALL(W9))'},
                  {name: 'Top 9 (ALL(W9))'},
                  {name: 'Top 10 (ALL(W9))'},
                ]
              },
              {
                name: 'Top Group 1 (W9)',
                children:[
                  {name: 'Top 1 (TG1(W9))'},
                  {name: 'Top 2 (TG1(W9))'},
                  {name: 'Top 3 (TG1(W9))'},
                  {name: 'Top 4 (TG1(W9))'},
                  {name: 'Top 5 (TG1(W9))'},
                  {name: 'Top 6 (TG1(W9))'},
                  {name: 'Top 7 (TG1(W9))'},
                  {name: 'Top 8 (TG1(W9))'},
                  {name: 'Top 9 (TG1(W9))'},
                  {name: 'Top 10 (TG1(W9))'},
                ]
              },
              {
                name: 'Top Group 2 (W9)',
                children:[
                  {name: 'Top 2 (TG2(W9))'},
                  {name: 'Top 4 (TG2(W9))'},
                  {name: 'Top 6 (TG2(W9))'},
                  {name: 'Top 8 (TG2(W9))'},
                  {name: 'Top 10 (TG2(W9))'},
                ]
              },
              {
                name: 'Top Group 3 (W9)',
                children:[
                  {name: 'Top 3 (TG3(W9))'},
                  {name: 'Top 6 (TG3(W9))'},
                  {name: 'Top 9 (TG3(W9))'},
                ]
              },
              {
                name: 'Top Group 4 (W9)',
                children:[
                  {name: 'Top 4 (TG4(W9))'},
                  {name: 'Top 8 (TG4(W9))'},
                ]
              },
              {
                name: 'Top Group 5 (W9)',
                children:[
                  {name: 'Top 5 (TG5(W9))'},
                  {name: 'Top 10 (TG5(W9))'},
                ]
              },
            ]            
          },
          {
            name:'Runs',
            children: [
              {
                name: 'All Runs (W9)',
                children:[
                  {name: 'Runs 1 (ALL(W9))'},
                  {name: 'Runs 2 (ALL(W9))'},
                  {name: 'Runs 3 (ALL(W9))'},
                  {name: 'Runs 4 (ALL(W9))'},
                  {name: 'Runs 5 (ALL(W9))'},
                  {name: 'Runs 6 (ALL(W9))'},
                  {name: 'Runs 7 (ALL(W9))'},
                  {name: 'Runs 8 (ALL(W9))'},
                  {name: 'Runs 9 (ALL(W9))'},
                  {name: 'Runs 10 (ALL(W9))'},
                ]
              },
              {
                name: 'Run Group 1 (W9)',
                children:[
                  {name: 'Run 1 (RG1(W9))'},
                  {name: 'Run 2 (RG1(W9))'},
                  {name: 'Run 3 (RG1(W9))'},
                  {name: 'Run 4 (RG1(W9))'},
                  {name: 'Run 5 (RG1(W9))'},
                  {name: 'Run 6 (RG1(W9))'},
                  {name: 'Run 7 (RG1(W9))'},
                  {name: 'Run 8 (RG1(W9))'},
                  {name: 'Run 9 (RG1(W9))'},
                  {name: 'Run 10 (RG1(W9))'},
                ]
              },
              {
                name: 'Run Group 2 (W9)',
                children:[
                  {name: 'Run 2 (RG2(W9))'},
                  {name: 'Run 4 (RG2(W9))'},
                  {name: 'Run 6 (RG2(W9))'},
                  {name: 'Run 8 (RG2(W9))'},
                  {name: 'Run 10 (RG2(W9))'},
                ]
              },
              {
                name: 'Run Group 3 (W9)',
                children:[
                  {name: 'Run 3 (RG3(W9))'},
                  {name: 'Run 6 (RG3(W9))'},
                  {name: 'Run 9 (RG3(W9))'},
                ]
              },
              {
                name: 'Run Group 4 (W9)',
                children:[
                  {name: 'Run 4 (RG4(W9))'},
                  {name: 'Run 8 (RG4(W9))'},
                ]
              },
              {
                name: 'Run Group 5 (W9)',
                children:[
                  {name: 'Run 5 (RG5(W9))'},
                  {name: 'Run 10 (RG5(W9))'},
                ]
              },
            ]            
          },
        ]
      },
      {
        name: 'Well10',
        children:[
          {
            name:'Curves ',
            children: [
              {
                name: 'All Curves (W10)',
                children:[
                  {name: 'Curve 1 (ALL(W10))'},
                  {name: 'Curve 2 (ALL(W10))'},
                  {name: 'Curve 3 (ALL(W10))'},
                  {name: 'Curve 4 (ALL(W10))'},
                  {name: 'Curve 5 (ALL(W10))'},
                  {name: 'Curve 6 (ALL(W10))'},
                  {name: 'Curve 7 (ALL(W10))'},
                  {name: 'Curve 8 (ALL(W10))'},
                  {name: 'Curve 9 (ALL(W10))'},
                  {name: 'Curve 10 (ALL(W10))'},
                ]
              },
              {
                name: 'Curve Group 1 (W10)',
                children:[
                  {name: 'Curve 1 (CG1(W10))'},
                  {name: 'Curve 2 (CG1(W10))'},
                  {name: 'Curve 3 (CG1(W10))'},
                  {name: 'Curve 4 (CG1(W10))'},
                  {name: 'Curve 5 (CG1(W10))'},
                  {name: 'Curve 6 (CG1(W10))'},
                  {name: 'Curve 7 (CG1(W10))'},
                  {name: 'Curve 8 (CG1(W10))'},
                  {name: 'Curve 9 (CG1(W10))'},
                  {name: 'Curve 10 (CG1(W10))'},
                ]
              },
              {
                name: 'Curve Group 2 (W10)',
                children:[
                  {name: 'Curve 2 (CG2(W10))'},
                  {name: 'Curve 4 (CG2(W10))'},
                  {name: 'Curve 6 (CG2(W10))'},
                  {name: 'Curve 8 (CG2(W10))'},
                  {name: 'Curve 10 (CG2(W10))'},
                ]
              },
              {
                name: 'Curve Group 3 (W10)',
                children:[
                  {name: 'Curve 3 (CG3(W10))'},
                  {name: 'Curve 6 (CG3(W10))'},
                  {name: 'Curve 9 (CG3(W10))'},
                ]
              },
              {
                name: 'Curve Group 4 (W10)',
                children:[
                  {name: 'Curve 4 (CG4(W10))'},
                  {name: 'Curve 8 (CG4(W10))'},
                ]
              },
              {
                name: 'Curve Group 5 (W10)',
                children:[
                  {name: 'Curve 5 (CG5(W10))'},
                  {name: 'Curve 10 (CG5(W10))'},
                ]
              },
            ]
          },
          {
            name:'Tops',
            children: [
              {
                name: 'All Tops (W10)',
                children:[
                  {name: 'Top 1 (ALL(W10))'},
                  {name: 'Top 2 (ALL(W10))'},
                  {name: 'Top 3 (ALL(W10))'},
                  {name: 'Top 4 (ALL(W10))'},
                  {name: 'Top 5 (ALL(W10))'},
                  {name: 'Top 6 (ALL(W10))'},
                  {name: 'Top 7 (ALL(W10))'},
                  {name: 'Top 8 (ALL(W10))'},
                  {name: 'Top 9 (ALL(W10))'},
                  {name: 'Top 10 (ALL(V))'},
                ]
              },
              {
                name: 'Top Group 1 (W10)',
                children:[
                  {name: 'Top 1 (TG1(W10))'},
                  {name: 'Top 2 (TG1(W10))'},
                  {name: 'Top 3 (TG1(W10))'},
                  {name: 'Top 4 (TG1(W10))'},
                  {name: 'Top 5 (TG1(W10))'},
                  {name: 'Top 6 (TG1(W10))'},
                  {name: 'Top 7 (TG1(W10))'},
                  {name: 'Top 8 (TG1(W10))'},
                  {name: 'Top 9 (TG1(W10))'},
                  {name: 'Top 10 (TG1(W10))'},
                ]
              },
              {
                name: 'Top Group 2 (W10)',
                children:[
                  {name: 'Top 2 (TG2(W10))'},
                  {name: 'Top 4 (TG2(W10))'},
                  {name: 'Top 6 (TG2(W10))'},
                  {name: 'Top 8 (TG2(W10))'},
                  {name: 'Top 10 (TG2(W10))'},
                ]
              },
              {
                name: 'Top Group 3 (W10)',
                children:[
                  {name: 'Top 3 (TG3(W10))'},
                  {name: 'Top 6 (TG3(W10))'},
                  {name: 'Top 9 (TG3(W10))'},
                ]
              },
              {
                name: 'Top Group 4 (W10)',
                children:[
                  {name: 'Top 4 (TG4(W10))'},
                  {name: 'Top 8 (TG4(W10))'},
                ]
              },
              {
                name: 'Top Group 5 (W10)',
                children:[
                  {name: 'Top 5 (TG5(W10))'},
                  {name: 'Top 10 (TG5(W10))'},
                ]
              },
            ]            
          },
          {
            name:'Runs',
            children: [
              {
                name: 'All Runs (W10)',
                children:[
                  {name: 'Runs 1 (ALL(W10))'},
                  {name: 'Runs 2 (ALL(W10))'},
                  {name: 'Runs 3 (ALL(W10))'},
                  {name: 'Runs 4 (ALL(W10))'},
                  {name: 'Runs 5 (ALL(W10))'},
                  {name: 'Runs 6 (ALL(V))'},
                  {name: 'Runs 7 (ALL(W10))'},
                  {name: 'Runs 8 (ALL(W10))'},
                  {name: 'Runs 9 (ALL(W10))'},
                  {name: 'Runs 10 (ALL(W10))'},
                ]
              },
              {
                name: 'Run Group 1 (W10)',
                children:[
                  {name: 'Run 1 (RG1(W10))'},
                  {name: 'Run 2 (RG1(W10))'},
                  {name: 'Run 3 (RG1(W10))'},
                  {name: 'Run 4 (RG1(W10))'},
                  {name: 'Run 5 (RG1(W10))'},
                  {name: 'Run 6 (RG1(W10))'},
                  {name: 'Run 7 (RG1(W10))'},
                  {name: 'Run 8 (RG1(W10))'},
                  {name: 'Run 9 (RG1(W10))'},
                  {name: 'Run 10 (RG1(W10))'},
                ]
              },
              {
                name: 'Run Group 2 (W10)',
                children:[
                  {name: 'Run 2 (RG2(W10))'},
                  {name: 'Run 4 (RG2(W10))'},
                  {name: 'Run 6 (RG2(W10))'},
                  {name: 'Run 8 (RG2(W10))'},
                  {name: 'Run 10 (RG2(W10))'},
                ]
              },
              {
                name: 'Run Group 3 (W10)',
                children:[
                  {name: 'Run 3 (RG3(W10))'},
                  {name: 'Run 6 (RG3(W10))'},
                  {name: 'Run 9 (RG3(W10))'},
                ]
              },
              {
                name: 'Run Group 4 (W10)',
                children:[
                  {name: 'Run 4 (RG4(W10))'},
                  {name: 'Run 8 (RG4(W10))'},
                ]
              },
              {
                name: 'Run Group 5 (W10)',
                children:[
                  {name: 'Run 5 (RG5(W10))'},
                  {name: 'Run 10 (RG5(W10))'},
                ]
              },
            ]            
          },
        ]
      },
    ]
  },
  {
    name: 'Group 1',
    children: [
      {name: 'Well5'},
      {name: 'Well3'},
      {name: 'Well10'},
      {name: 'Well1'},
    ]
  },
  {
    name: 'Group 2',
    children: [
      {name: 'Well8'},
      {name: 'Well6'},
      {name: 'Well4'},
    ]
  },
  {
    name: 'Group 3',
    children: [
      {name: 'Well9'},
      {name: 'Well2'},
      {name: 'Well7'},
    ]
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[NodeService]
})
export class AppComponent {
  title = 'TreeView';

  treeControl = new NestedTreeControl<TreeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TreeNode>();
  chield : any;
  values: string[];
  selectdNodeName :String;

  constructor(private nodeService: NodeService) {
    this.dataSource.data = TREE_DATA;
   //TODO set the this.dataSource.data convert the service response to treenode format
   //this.nodeService.getFiles().then(files => this.dataSource.data = files);
   this.nodeService.getFiles();
  }

  hasChild = (_: number, node: TreeNode) => !!node.children && node.children.length > 0;

  logNode(node){
    this.selectdNodeName = node.name;
    this.values=node.children;
    console.log(this.values);
  }
}
enableProdMode();
