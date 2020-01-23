import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';
import { newFeature } from '../actions/featureActions'

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} newFeature={props.newFeature} />
          ))}
        </ol>
      ) : (
          <p>Nice looking car!</p>
        )}
    </div>
  );
};
//( if ()

const mapStateToProps = (state) => {
  return {
    additionalFeatures: state.additionalFeatures,
    features: state.car.features
  }
}

export default connect(mapStateToProps, { newFeature })(AdditionalFeatures);
