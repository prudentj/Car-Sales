import React from 'react';
import { addFeature } from '../actions/featureActions';
import { connect } from 'react-redux';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      {console.log(!props.feature.hide)}
      <button className="button" onClick={() => props.newFeature(props.feature)} >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
