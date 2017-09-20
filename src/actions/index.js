/*===========================================================================*/
/*  Copyright 2017 Maxim Zhukov                                              */
/*                                                                           */
/*  Licensed under the Apache License, Version 2.0 (the "License");          */
/*  you may not use this file except in compliance with the License.         */
/*  You may obtain a copy of the License at                                  */
/*                                                                           */
/*      http://www.apache.org/licenses/LICENSE-2.0                           */
/*                                                                           */
/*  Unless required by applicable law or agreed to in writing, software      */
/*  distributed under the License is distributed on an "AS IS" BASIS,        */
/*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. */
/*  See the License for the specific language governing permissions and      */
/*  limitations under the License.                                           */
/*===========================================================================*/
//******Action types:******

//priceData:
export const priceADD      = {REQ:'PUSH_NEW_PRICE_ITEM_REQUEST',  OK:'PUSH_NEW_PRICE_ITEM_SUCCESS',  FAIL:'PUSH_NEW_PRICE_ITEM_FAILURE'}
export const priceDEL      = {REQ:'DEL_PRICE_ITEM_REQUEST',       OK:'DEL_PRICE_ITEM_SUCCESS',       FAIL:'DEL_PRICE_ITEM_FAILURE'}
export const priceEDIT     = {REQ:'EDIT_PRICE_ITEM_REQUEST',      OK:'EDIT_PRICE_ITEM_SUCCESS',      FAIL:'EDIT_PRICE_ITEM_FAILURE',      UPD:'EDIT_PRICE_ITEM_UPDATING'}
export const priceLOAD     = {REQ:'LOAD_PRICE_WHOLE_REQUEST',     OK:'LOAD_PRICE_WHOLE_SUCCESS',     FAIL:'LOAD_PRICE_WHOLE_FAILURE'}
export const adm_priceLOAD = {REQ:'LOAD_ADM_PRICE_WHOLE_REQUEST', OK:'LOAD_ADM_PRICE_WHOLE_SUCCESS', FAIL:'LOAD_ADM_PRICE_WHOLE_FAILURE'}

//newsData:
export const newsADD      = {REQ:'PUSH_NEW_NEWS_ITEM_REQUEST',  OK:'PUSH_NEW_NEWS_ITEM_SUCCESS',  FAIL:'PUSH_NEW_NEWS_ITEM_FAILURE'}
export const newsDEL      = {REQ:'DEL_NEWS_ITEM_REQUEST',       OK:'DEL_NEWS_ITEM_SUCCESS',       FAIL:'DEL_NEWS_ITEM_FAILURE'}
export const newsEDIT     = {REQ:'EDIT_NEWS_ITEM_REQUEST',      OK:'EDIT_NEWS_ITEM_SUCCESS',      FAIL:'EDIT_NEWS_ITEM_FAILURE',      UPD:'EDIT_NEWS_ITEM_UPDATING'}
export const newsLOAD     = {REQ:'LOAD_NEWS_WHOLE_REQUEST',     OK:'LOAD_NEWS_WHOLE_SUCCESS',     FAIL:'LOAD_NEWS_WHOLE_FAILURE'}
export const adm_newsLOAD = {REQ:'LOAD_ADM_NEWS_WHOLE_REQUEST', OK:'LOAD_ADM_NEWS_WHOLE_SUCCESS', FAIL:'LOAD_ADM_NEWS_WHOLE_FAILURE'}

//cntData:
//------Add-Edit-Deletes:
export const cntADD  =  { 
                         Phn:{REQ:'PUSH_NEW_CONTACTS_PHONE_ITEM_REQUEST',   OK:'PUSH_NEW_CONTACTS_PHONE_ITEM_SUCCESS',   FAIL:'PUSH_NEW_CONTACTS_PHONE_ITEM_FAILURE'}, 
                         Eml:{REQ:'PUSH_NEW_CONTACTS_EMAIL_ITEM_REQUEST',   OK:'PUSH_NEW_CONTACTS_EMAIL_ITEM_SUCCESS',   FAIL:'PUSH_NEW_CONTACTS_EMAIL_ITEM_FAILURE'}, 
                         Adr:{REQ:'PUSH_NEW_CONTACTS_ADDRESS_ITEM_REQUEST', OK:'PUSH_NEW_CONTACTS_ADDRESS_ITEM_SUCCESS', FAIL:'PUSH_NEW_CONTACTS_ADDRESS_ITEM_FAILURE'} 
                        }
export const cntDEL  =  { 
                         Phn:{REQ:'DEL_CONTACTS_PHONE_ITEM_REQUEST',        OK:'DEL_CONTACTS_PHONE_ITEM_SUCCESS',        FAIL:'DEL_CONTACTS_PHONE_ITEM_FAILURE'}, 
                         Eml:{REQ:'DEL_CONTACTS_EMAIL_ITEM_REQUEST',        OK:'DEL_CONTACTS_EMAIL_ITEM_SUCCESS',        FAIL:'DEL_CONTACTS_EMAIL_ITEM_FAILURE'}, 
                         Adr:{REQ:'DEL_CONTACTS_ADDRESS_ITEM_REQUEST',      OK:'DEL_CONTACTS_ADDRESS_ITEM_SUCCESS',      FAIL:'DEL_CONTACTS_ADDRESS_ITEM_FAILURE'} 
                        }
export const cntEDIT =  { 
                         Intro:{REQ:'EDIT_CONTACTS_INTRO_ITEM_REQUEST',       OK:'EDIT_CONTACTS_INTRO_ITEM_SUCCESS',       FAIL:'EDIT_CONTACTS_INTRO_ITEM_FAILURE',   UPD:'EDIT_CONTACTS_INTRO_ITEM_UPDATING'}, 
                         Phn:  {REQ:'EDIT_CONTACTS_PHONE_ITEM_REQUEST',       OK:'EDIT_CONTACTS_PHONE_ITEM_SUCCESS',       FAIL:'EDIT_CONTACTS_PHONE_ITEM_FAILURE',   UPD:'EDIT_CONTACTS_PHONE_ITEM_UPDATING'}, 
                         Eml:  {REQ:'EDIT_CONTACTS_EMAIL_ITEM_REQUEST',       OK:'EDIT_CONTACTS_EMAIL_ITEM_SUCCESS',       FAIL:'EDIT_CONTACTS_EMAIL_ITEM_FAILURE',   UPD:'EDIT_CONTACTS_EMAIL_ITEM__UPDATING'}, 
                         Adr:  {REQ:'EDIT_CONTACTS_ADDRESS_ITEM_REQUEST',     OK:'EDIT_CONTACTS_ADDRESS_ITEM_SUCCESS',     FAIL:'EDIT_CONTACTS_ADDRESS_ITEM_FAILURE', UPD:'EDIT_CONTACTS_ADDRESS_ITEM_UPDATING'} 
                        }
//------Loads:
export const cntLOAD     = {REQ:'LOAD_CONTACTS_WHOLE_REQUEST',            OK:'LOAD_CONTACTS_WHOLE_SUCCESS',            FAIL:'LOAD_CONTACTS_WHOLE_FAILURE'}
export const adm_cntLOAD = {REQ:'LOAD_ADM_CONTACTS_WHOLE_REQUEST',        OK:'LOAD_ADM_CONTACTS_WHOLE_SUCCESS',        FAIL:'LOAD_ADM_CONTACTS_WHOLE_FAILURE'}

//uiActionTypes:
export const uiCntCarACT = {SEL:'UI_CONTACTS_CAROUSEL_SELECT',  CLICK:'UI_CONTACTS_CAROUSEL_CLICK'}

//abtData:
export const abtADD      = {REQ:'PUSH_NEW_ABOUT_ARTICLE_REQUEST',  OK:'PUSH_NEW_ABOUT_ARTICLE_SUCCESS',  FAIL:'PUSH_NEW_ABOUT_ARTICLE_FAILURE'}
export const abtDEL      = {REQ:'DEL_ABOUT_ARTICLE_REQUEST',       OK:'DEL_ABOUT_ARTICLE_SUCCESS',       FAIL:'DEL_ABOUT_ARTICLE_FAILURE'}
export const abtEDIT     = {REQ:'EDIT_ABOUT_ARTICLE_REQUEST',      OK:'EDIT_ABOUT_ARTICLE_SUCCESS',      FAIL:'EDIT_ABOUT_ARTICLE_FAILURE',      UPD:'EDIT_ABOUT_ARTICLE_UPDATING'}
export const abtLOAD     = {REQ:'LOAD_ABOUT_WHOLE_REQUEST',     OK:'LOAD_ABOUT_WHOLE_SUCCESS',     FAIL:'LOAD_ABOUT_WHOLE_FAILURE'}
export const adm_abtLOAD = {REQ:'LOAD_ADM_ABOUT_WHOLE_REQUEST', OK:'LOAD_ADM_ABOUT_WHOLE_SUCCESS', FAIL:'LOAD_ADM_ABOUT_WHOLE_FAILURE'}

//actData:
export const actADD      = {REQ:'PUSH_NEW_SALE_ARTICLE_REQUEST',  OK:'PUSH_NEW_SALE_ARTICLE_SUCCESS',  FAIL:'PUSH_NEW_SALE_ARTICLE_FAILURE'}
export const actDEL      = {REQ:'DEL_SALE_ARTICLE_REQUEST',       OK:'DEL_SALE_ARTICLE_SUCCESS',       FAIL:'DEL_SALE_ARTICLE_FAILURE'}
export const actEDIT     = {REQ:'EDIT_SALE_ARTICLE_REQUEST',      OK:'EDIT_SALE_ARTICLE_SUCCESS',      FAIL:'EDIT_SALE_ARTICLE_FAILURE',      UPD:'EDIT_SALE_ARTICLE_UPDATING'}
export const actLOAD     = {REQ:'LOAD_SALE_WHOLE_REQUEST',     OK:'LOAD_SALE_WHOLE_SUCCESS',     FAIL:'LOAD_SALE_WHOLE_FAILURE'}
export const adm_actLOAD = {REQ:'LOAD_ADM_SALE_WHOLE_REQUEST', OK:'LOAD_ADM_SALE_WHOLE_SUCCESS', FAIL:'LOAD_ADM_SALE_WHOLE_FAILURE'}


//*************************

//******Action creators:******

//all in sagas

//****************************
