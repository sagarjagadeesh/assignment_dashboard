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
    subject: "Motivational Quotes",
    cc: "testuser2@gmail.com"
  },
  {
    message: "“One Of The Lessons That I Grew Up With Was To Always Stay True To Yourself And Never Let What Somebody Else Says Distract You From Your Goals.” – Michelle Obama",
    senderName: "Anna smith",
    senderEmail: "testuser1@gmail.com",
    receiverName: "Sagar",
    receiverEmail: "testuser@gmail.com",
    read: false,
    time: today,
    id: 122,
    subject: "Motivational Quotes",
    cc: ""
  },
  {
    message: "““I Think Goals Should Never Be Easy, They Should Force You To Work, Even If They Are Uncomfortable At The Time.” – Michael Phelps",
    senderName: "Anna Smith",
    senderEmail: "testuser1@gmail.com",
    receiverName: "Mailchip",
    receiverEmail: "testuser2@gmail.com",
    read: false,
    time: yesterday,
    id: 128,
    subject: "Motivational Quotes",
    cc: ""
  },
  {
    message: "““I Think Goals Should Never Be Easy, They Should Force You To Work, Even If They Are Uncomfortable At The Time.” – Michael Phelps",
    senderName: "Anna Smith",
    senderEmail: "testuser1@gmail.com",
    receiverName: "Mailchip",
    receiverEmail: "testuser2@gmail.com",
    read: false,
    time: yesterday,
    id: 128,
    subject: "Motivational Quotes",
    cc: "testuser@gmail.com"
  },
  {
    message: "“Today’s Accomplishments Were Yesterday’s Impossibilities.” – Robert H. Schuller",
    senderName: "Sagar",
    senderEmail: "testuser@gmail.com",
    receiverName: "Anna smith",
    receiverEmail: "testuser1@gmail.com",
    read: false,
    time: yesterday,
    id: 123,
    subject: "Motivational Quotes",
    cc: "testuser2@gmail.com"
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
    subject: "Motivational Quotes",
    cc: ""
  },
  {
    message: "“Things Work Out Best For Those Who Make The Best Of How Things Work Out.” – Positive Quote By John Wooden",
    senderName: "Sagar",
    senderEmail: "testuser@gmail.com",
    receiverName: "Mailchip",
    receiverEmail: "testuser2@gmail.com",
    read: false,
    time: yesterday,
    id: 125,
    subject: "Motivational Quotes",
    cc: "testuser1@gmail.com"
  },
  {
    message: "“A Room Without Books Is Like A Body Without A Soul.” – Marcus Tullius Cicero",
    senderName: "Sagar",
    senderEmail: "testuser@gmail.com",
    receiverName: "Mailchip",
    receiverEmail: "testuser2@gmail.com",
    read: false,
    time: yesterday,
    id: 126,
    subject: "Motivational Quotes",
    cc: ""
  },
  {
    message: "“Things Work Out Best For Those Who Make The Best Of How Things Work Out.” – Positive Quote By John Wooden",
    senderName: "Sagar",
    senderEmail: "testuser@gmail.com",
    receiverName: "Mailchip",
    receiverEmail: "testuser2@gmail.com",
    read: false,
    time: yesterday,
    id: 127,
    subject: "Motivational Quotes",
    cc: "testuser1@gmail.com"
  },
  {
    message: "The Only Way To Do Great Work Is To Love What You Do. If You Haven’t Found It Yet, Keep Looking. Don’t Settle.” – Steve Jobs",
    senderName: "Mailchip",
    senderEmail: "testuser2@gmail.com",
    receiverName: "Anna smith",
    receiverEmail: "testuser1@gmail.com",
    read: false,
    time: yesterday,
    id: 128,
    subject: "Motivational Quotes",
    cc: "testuser@gmail.com"
  },
  {
    message: "You Don’t Have To Be Great To Start, But You Have To Start To Be Great.” – Zig Ziglar",
    senderName: "Mailchip",
    senderEmail: "testuser2@gmail.com",
    receiverName: "Anna smith",
    receiverEmail: "testuser1@gmail.com",
    read: false,
    time: yesterday,
    id: 129,
    subject: "Motivational Quotes",
    cc: ""
  },
  {
    message: "“Things Work Out Best For Those Who Make The Best Of How Things Work Out.” – Positive Quote By John Wooden",
    senderName: "Mailchip",
    senderEmail: "testuser2@gmail.com",
    receiverName: "Sagar",
    receiverEmail: "testuser@gmail.com",
    read: false,
    time: yesterday,
    id: 130,
    subject: "Motivational Quotes",
    cc: "testuser1@gmail.com"
  },
  {
    message: "A Clear Vision, Backed By Definite Plans, Gives You A Tremendous Feeling Of Confidence And Personal Power.” – Brian Tracy",
    senderName: "Mailchip",
    senderEmail: "testuser2@gmail.com",
    receiverName: "Sagar",
    receiverEmail: "testuser@gmail.com",
    read: false,
    time: yesterday,
    id: 131,
    subject: "Motivational Quotes",
    cc: ""
  },
  {
    message: "There Are No Limits To What You Can Accomplish, Except The Limits You Place On Your Own Thinking.” – Brian Tracy",
    senderName: "Mailchip",
    senderEmail: "testuser2@gmail.com",
    receiverName: "Sagar",
    receiverEmail: "testuser@gmail.com",
    read: false,
    time: yesterday,
    id: 132,
    subject: "Motivational Quotes",
    cc: "testuser1@gmail.com"
  },
];