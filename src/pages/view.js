import React from 'react';
import { useLocation } from 'react-router';
import { Markup } from 'interweave';
import moment from 'moment';
import 'moment/locale/ru';

import fileImg from '../assets/img/file.svg';

export default function View(props) {
  const location = useLocation();
  const post = location.state.res;

  return (
    <div className="page page-view">
      <div className="title">{post.title}</div>
      <div className="date">{moment(post.date).format('lll')}</div>
      <div className="content">{<Markup content={post.content} />}</div>
    </div>
  );
}
