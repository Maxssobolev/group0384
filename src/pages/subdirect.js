import React, { useState } from 'react';
import { useLocation } from 'react-router';
import Sublinks from '../components/sublinks';
import Subhomework from '../components/subhomework';
import LectureRecords from '../components/lecturerecords';
import Teachers from '../components/teachers';
import { Tabs, Tab } from 'react-bootstrap';
import axios from 'axios';

export default function Subdirect(props) {
  const location = useLocation();
  const just_subject = location.state.res;

  const [isLectoriesToDisable, setisLectoriesToDisable] = React.useState(true);
  const apiUrl = `/api/subjectlectories/?id=${just_subject.id}`;
  axios.get(apiUrl).then((resp) => {
    if (resp.data.length > 0) {
      setisLectoriesToDisable(false);
    }
  });

  const [isHWToDisable, setisHWToDisable] = React.useState(true);
  const apiUrl2 = `/api/subjecthomework/?id=${just_subject.id}`;
  axios.get(apiUrl2).then((resp) => {
    if (resp.data.length > 0) {
      setisHWToDisable(false);
    }
  });

  const [isLinksToDisable, setisLinksToDisable] = React.useState(true);
  const apiUrl3 = `/api/subjectlinks/?id=${just_subject.id}`;
  axios.get(apiUrl3).then((resp) => {
    if (resp.data.length > 0) {
      setisLinksToDisable(false);
    }
  });

  return (
    <div className="page page-subdirect">
      <div className="title">{just_subject.title}</div>
      <Teachers subject_id={just_subject.id} />
      <Tabs transition={false} id="noanim-tab-example">
        {!isHWToDisable && (
          <Tab
            eventKey="homework"
            title="Домашнее задание"
            {...(isHWToDisable ? { disabled: true } : {})}>
            <Subhomework subject_id={just_subject.id} />
          </Tab>
        )}
        {!isLinksToDisable && (
          <Tab
            eventKey="linkers"
            title="Полезные ссылки"
            {...(isLinksToDisable ? { disabled: true } : {})}>
            <Sublinks subject_id={just_subject.id} />
          </Tab>
        )}
        {!isLectoriesToDisable && (
          <Tab
            eventKey="lectories"
            title="Записи лекций"
            {...(isLectoriesToDisable ? { disabled: true } : {})}>
            <LectureRecords subject_id={just_subject.id} />
          </Tab>
        )}
      </Tabs>
    </div>
  );
}
