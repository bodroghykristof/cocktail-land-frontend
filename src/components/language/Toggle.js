import React, { useContext } from 'react';
import style from 'styled-components';
import { LanguageContext } from './LanguageContext';

const ToggleWrapper = style.div`
    display: flex;
`;

const ToggleBox = style.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const ToggleSlider = style.span`
border-radius: 34px;
position: absolute;
cursor: pointer;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: #ccc;
-webkit-transition: .4s;
transition: .4s;

&:before {
    border-radius: 50%;
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}
`;

const ToggleCheckBox = style.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${ToggleSlider} {
    background-color: #B5F7B5;
  }

  &:focus + ${ToggleSlider} {
    box-shadow: 0 0 1px #B5F7B5;
  }

  &:checked + ${ToggleSlider}:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }


`;

const Toggle = () => {
  const [language, setLanguage] = useContext(LanguageContext);

  const changeLanguage = () => {
    setLanguage(language === 'english' ? 'german' : 'english');
    console.log(language);
  };

  return (
    <ToggleWrapper>
      <ToggleBox>
        <ToggleCheckBox
          type='checkbox'
          onChange={changeLanguage}
        ></ToggleCheckBox>
        <ToggleSlider></ToggleSlider>
      </ToggleBox>
    </ToggleWrapper>
  );
};

export default Toggle;
