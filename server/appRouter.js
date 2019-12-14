import express from 'express';
import renderPage from '../libs/render-page';

import  { Controller as Chome, View as ViewHome,  } from '../app/page/home';
import  { Controller as  CLayout } from '../app/components/layout';

const router = express.Router();

/*
* Page Router, render html
*/

router.get('/', Chome, CLayout, (req, res) => {
  renderPage(res, ViewHome, 'home', req.appData);
 });

export default router;






