import React from 'react'
import { RelatedItem } from '../types';

const HealthTopicRelatedItem: React.FC <RelatedItem> = ({title, url}) => {

    return (
        <div className="col-sm-8 mt-3">
             <p className="align-top font-weight-bold small">{title}</p>
             <a href={url} className="badge badge-ligth align-bottom">Read More</a>
        </div>
    )
}

export default HealthTopicRelatedItem;