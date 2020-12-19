import React, { Suspense } from 'react';
import axios from 'axios';
import { Col } from 'react-bootstrap';
import moment from 'moment';
import 'moment/locale/ru';

const SingleLecRecord = React.lazy(() => import('./SingleLecRecord'));

export default class LectureRecords extends React.Component {
  constructor(props) {
    super(props);
    this.subject_id = this.props.subject_id;

    this.state = {
      lectories: [],
    };
  }

  componentDidMount() {
    const apiUrl = `/api/subjectlectories/?id=${this.subject_id}`;
    axios.get(apiUrl).then((resp) => {
      if (resp.data.length > 0) {
        this.setState({
          lectories: resp.data,
        });
      }
    });
  }

  render() {
    if (this.state.lectories) {
      return (
        <div className="page-subdirect__lectorBlock">
          <div className="wrapper">
            {this.state.lectories.map((res, index) => (
              <Suspense
                fallback={<Col style={{ minHeight: '266px', minWidth: '268px' }}>Loading...</Col>}
                key={index}>
                <SingleLecRecord lec={res} />
              </Suspense>
            ))}
          </div>
        </div>
      );
    } else {
      return 'none';
    }
  }
}
