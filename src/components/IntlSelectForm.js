import React from 'react';

const IntlSelectForm = props => {
  return <div className="selectForm">
      <p className="selectForm__label">Select international currency</p>
      <form onChange={props.setIntl}>
        <select className="selectForm__form">
          {props.intlList.map(intl => (
            <option key={intl.code}>{intl.name}</option>
          ))}
        </select>
      </form>
    </div>;
};

export default IntlSelectForm;
