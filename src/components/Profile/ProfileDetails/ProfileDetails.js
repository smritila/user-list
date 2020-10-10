import React, { Fragment } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import classes from './ProfileDetails.module.css';
import ProfilePicture from '../ProfilePicture/ProfilePicture';

const personalDetailFields = [
    { label: 'Username', key: 'username' },
    { label: 'e-mail', key: 'email' },
    { label: 'Phone', key: 'phone' },
    { label: 'Website', key: 'website' }
];

const companyDetailFields = [
    { label: 'Name', key: 'name' },
    { label: 'catchphrase', key: 'catchPhrase' },
    { label: 'bs', key: 'bs' },
];

const addressDetailFields = [
    { label: 'Street', key: 'street' },
    { label: 'Suite', key: 'suite' },
    { label: 'City', key: 'city' },
    { label: 'Zipcode', key: 'zipcode' }
];

const MyMapComponent = withScriptjs(withGoogleMap((props) => {
    let { lat, lng } = props.location;
    lat = Number(lat); lng = Number(lng);
    return <GoogleMap
            defaultZoom={5}
            defaultCenter={{ lat: lat, lng: lng }}
        >
            {props.isMarkerShown && <Marker position={{ lat: lat, lng: lng }} />}
        </GoogleMap>
    }
));

const profileDetails = props => {

    const { name, profilepicture, company, address } = props.detail;

    let personalDetails = personalDetailFields.map(field => {
        return <Fragment key={field.key}>
            <div className={['text-light', classes['block__el--end']].join(' ')}>{ field.label } :</div>
            <div className={'text-dark'}>{ props.detail[field.key] }</div>
        </Fragment>
    });

    let companyDetails = null;
    if(company) {
        companyDetails = companyDetailFields.map(field => {
            return <Fragment key={field.key}>
                <div className={['text-light', classes['block__el--end']].join(' ')}>{ field.label } :</div>
                <div className={'text-dark'}>{ company[field.key] }</div>
            </Fragment>
        });
    }

    let addressDetails = null, map = null;
    if(address) {
        addressDetails = addressDetailFields.map(field => {
            return <Fragment key={field.key}>
                <div className={['text-light', classes['block__el--end']].join(' ')}>{ field.label } :</div>
                <div className={'text-dark'}>{ address[field.key] }</div>
            </Fragment>
        });
        map = <MyMapComponent
            isMarkerShown 
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDA-69x3J9Pvv-sP_CKV0SKu51bYyU2jBw&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            location={address.geo}
        />;
    }

    return <div className={classes.ProfileDetails}>
        <div className={classes.ProfileDetails__primary}>
            <ProfilePicture size="large" src={profilepicture} />
            <div className={'text-dark'}>{ name }</div>
            <div className={[classes.ProfileDetails__primary__block, classes['ProfileDetails__primary__block--with-border']].join(' ')}>
                { personalDetails }
            </div>
            <div className="text-light align-center">Company</div>
            <div className={classes.ProfileDetails__primary__block}>
                { companyDetails }
            </div>
        </div>
        <div className={classes.ProfileDetails__address}>
            <div className="text-light">Address: </div>
            <div className={classes.ProfileDetails__primary__block}>
                { addressDetails }
            </div>
            { map }
        </div>
    </div>
}

export default profileDetails;