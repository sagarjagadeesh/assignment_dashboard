import { history } from '../routes';
import { notify } from "../components/Notifier/Notifier";

let authUserHeader = undefined;
const userKey = '__auth';
const userKey2 = '__is_user_loggedIn';

export const user_authorizer = {
  setHeader: (authorizationHeader) => {
    authUserHeader = authorizationHeader;
    if (authUserHeader === undefined) localStorage.removeItem(userKey);
    else {
      localStorage.setItem(userKey, authorizationHeader);
      localStorage.setItem(userKey2, 'true');
    }
  },
  getHeader: () => {
    authUserHeader = authUserHeader || localStorage.getItem(key);
    return authUserHeader;
  }
};

let authHeader = undefined;
const key = '__auth';
const key2 = '__is_loggedIn';

export const LOCATION = '__location';

export const authorizer = {
  setHeader: (authorizationHeader) => {
    authHeader = authorizationHeader;
    if (authHeader === undefined) localStorage.removeItem(key);
    else {
      localStorage.setItem(key, authorizationHeader);
      localStorage.setItem(key2, 'true');
    }
  },
  getHeader: () => {
    authHeader = authHeader || localStorage.getItem(key);
    return authHeader;
  }
};

let adminAuthHeader = undefined;
const adminkey = '__admin_auth';
const adminkey2 = '__is_admin_loggedIn';

export const adminAuthorizer = {
  setHeader: (authorizationHeader) => {
    adminAuthHeader = authorizationHeader;
    if (adminAuthHeader === undefined) localStorage.removeItem(adminkey);
    else {
      localStorage.setItem(adminkey, authorizationHeader);
      localStorage.setItem(adminkey2, 'true');
    }
  },
  getHeader: () => {
    adminAuthHeader = adminAuthHeader || localStorage.getItem(adminkey);
    return adminAuthHeader;
  }
};

export const pushLogout = () => {
  localStorage.removeItem('__auth');
  localStorage.removeItem('__admin_auth');
  localStorage.removeItem('__is_loggedIn');
  localStorage.removeItem('__is_admin_loggedIn');
  localStorage.removeItem('email');
  history.push('/');
  notify.success('Not Authorized', 'Please login again !');
};

export const doLogout = () => {
  localStorage.removeItem('__auth');
  localStorage.removeItem('__is_loggedIn');
  localStorage.removeItem('__admin_auth');
  localStorage.removeItem('__is_admin_loggedIn');
  localStorage.removeItem('email');
  history.push('/');
  notify.success('Success', 'Successfully logged out!');
};

export let authorizationHeadr = localStorage.getItem("__auth");
export let adminAuthorizationHeadr = localStorage.getItem("__admin_auth");

export const today = new Date()
const yesterday = new Date(today)

yesterday.setDate(yesterday.getDate() - 1)

today.toDateString()
yesterday.toDateString()

export const mailData = [
  {
    message: "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.",
    senderName: "Anna smith",
    senderEmail: "testuser1@gmail.com",
    receiverName: "Sagar",
    receiverEmail: "testuser@gmail.com",
    read: false,
    time: today,
    id: 121,
    subject: "Motivational Quotes"
  },
  {
    message: "It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.” – Inspirational Quote By Vince Lombardi",
    senderName: "Anna smith",
    senderEmail: "testuser1@gmail.com",
    receiverName: "Sagar",
    receiverEmail: "testuser@gmail.com",
    read: false,
    time: today,
    id: 122,
    subject: "Motivational Quotes"
  },
  {
    message: "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.” – Steve Jobs",
    senderName: "Sagar",
    senderEmail: "testuser@gmail.com",
    receiverName: "Anna smith",
    receiverEmail: "testuser1@gmail.com",
    read: false,
    time: yesterday,
    id: 123,
    subject: "Motivational Quotes"
  },
  {
    message: "People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.” – Rob Siltanen",
    senderName: "Sagar",
    senderEmail: "testuser@gmail.com",
    receiverName: "Anna smith",
    receiverEmail: "testuser1@gmail.com",
    read: false,
    time: yesterday,
    id: 124,
    subject: "Motivational Quotes"
  },
];