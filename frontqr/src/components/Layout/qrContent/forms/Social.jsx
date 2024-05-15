import React, { useState, useRef, useEffect } from 'react';
import { Formik, Form, Field } from "formik";
import Select from 'react-select';
import { SocialIcon } from 'react-social-icons'
import GradientColorPicker from 'react-gcolor-picker'; // Importamos el nuevo color picker

export const SocialForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff')
  const [boxColor, setBoxColor] = useState('#ffffff')
  const [titleColor, setTitleColor] = useState('#ffffff');
  const [descriptionColor, setDescriptionColor] = useState('#ffffff');
  const [showTitleColorPicker, setShowTitleColorPicker] = useState(false);
  const [showDescriptionColorPicker, setShowDescriptionColorPicker] = useState(false);
  const [showBackgroundColorPicker, setShowBackgroundColorPicker] = useState(false);
  const [showBoxColorPicker, setShowBoxColorPicker] = useState(false);
  const titleColorPickerRef = useRef(null);
  const descriptionColorPickerRef = useRef(null);
  const backgroundColorPickerRef = useRef(null);
  const boxColorPickerRef = useRef(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleBackgroundColorChange = (newHexColor) => {
    setBackgroundColor(newHexColor);
  };

  const handleBoxColorChange = (newHexColor) => {
    setBoxColor(newHexColor);
  };

  const handleTitleColorChange = (newHexColor) => {
    setTitleColor(newHexColor);
  };

  const handleDescriptionColorChange = (newHexColor) => {
    setDescriptionColor(newHexColor);
  };

  const handleTitleClickOutside = (e) => {
    if (titleColorPickerRef.current && !titleColorPickerRef.current.contains(e.target)) {
      setShowTitleColorPicker(false);
    }
  };

  const handleDescriptionClickOutside = (e) => {
    if (descriptionColorPickerRef.current && !descriptionColorPickerRef.current.contains(e.target)) {
      setShowDescriptionColorPicker(false);
    }
  };

  const handleBackgroundClickOutside = (e) => {
    if (backgroundColorPickerRef.current && !backgroundColorPickerRef.current.contains(e.target)) {
      setShowBackgroundColorPicker(false);
    }
  };

  const handleBoxClickOutside = (e) => {
    if (boxColorPickerRef.current && !boxColorPickerRef.current.contains(e.target)) {
      setShowBoxColorPicker(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleTitleClickOutside);
    document.addEventListener('mousedown', handleDescriptionClickOutside);
    document.addEventListener('mousedown', handleBackgroundClickOutside);
    document.addEventListener('mousedown', handleBoxClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleTitleClickOutside);
      document.removeEventListener('mousedown', handleDescriptionClickOutside);
      document.removeEventListener('mousedown', handleBackgroundClickOutside);
      document.removeEventListener('mousedown', handleBoxClickOutside);
    };
  }, []);

  const initialValues = {
    title: '',
    description: '',
  };

  const options = [
    {
      value: 'instagram', label: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SocialIcon network='instagram' style={{ marginRight: '5px', width: '20px', height: '20px' }} />
          <span>Instagram</span>
        </div>
      ), icon: <SocialIcon network='instagram' style={{ marginTop: '8px', marginRight: '5px', width: '40px', height: '40px' }} />
    },
    {
      value: 'facebook', label: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SocialIcon network='facebook' style={{ marginRight: '5px', width: '20px', height: '20px' }} />
          <span>Facebook</span>
        </div>
      ), icon: <SocialIcon network='facebook' style={{ marginTop: '8px', marginRight: '5px', width: '40px', height: '40px' }} />
    },
    {
      value: 'tiktok', label: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SocialIcon network='tiktok' style={{ marginRight: '5px', width: '20px', height: '20px' }} />
          <span>TikTok</span>
        </div>
      ), icon: <SocialIcon network='tiktok' style={{ marginTop: '8px', marginRight: '5px', width: '40px', height: '40px' }} />
    },
    {
      value: 'x', label: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SocialIcon network='x' style={{ marginRight: '5px', width: '20px', height: '20px' }} />
          <span>X</span>
        </div>
      ), icon: <SocialIcon network='x' style={{ marginTop: '8px', marginRight: '5px', width: '40px', height: '40px' }} />
    },
    {
      value: 'discord', label: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SocialIcon network='discord' style={{ marginRight: '5px', width: '20px', height: '20px' }} />
          <span>Discord</span>
        </div>
      ), icon: <SocialIcon network='discord' style={{ marginTop: '8px', marginRight: '5px', width: '40px', height: '40px' }} />
    },
    {
      value: 'youtube', label: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SocialIcon network='youtube' style={{ marginRight: '5px', width: '20px', height: '20px' }} />
          <span>YouTube</span>
        </div>
      ), icon: <SocialIcon network='youtube' style={{ marginTop: '8px', marginRight: '5px', width: '40px', height: '40px' }} />
    },
    {
      value: 'reddit', label: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SocialIcon network='reddit' style={{ marginRight: '5px', width: '20px', height: '20px' }} />
          <span>Reddit</span>
        </div>
      ), icon: <SocialIcon network='reddit' style={{ marginTop: '8px', marginRight: '5px', width: '40px', height: '40px' }} />
    },
  ];

  const handleMultiSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  return (
    <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                // Handle form submission logic here
                console.log(values);
                actions.setSubmitting(false);
            }}
        >
            {({ setFieldValue }) => (
                <Form className="max-w-4xl mx-auto mt-8 relative">
                    <div className="w-full bg-gray-100 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Social Qr</h2>
                        <div className="flex flex-col md:flex-row md:items-start md:mb-4">
                            <div className="flex flex-col w-full md:w-2/3 mr-6 mb-4 md:mb-0">
                                <label htmlFor="title" className="mb-2">Title:</label>
                                <Field
                                    type="text"
                                    id="title"
                                    placeholder="Title"
                                    className="border w-full border-gray-300 rounded p-2"
                                    value={title}
                                    onChange={handleTitleChange}
                                />
                            </div>
                            <div className="flex flex-col relative">
                                <label htmlFor="titleColor" className="mb-2">Color:</label>
                                <div className="flex items-center">
                                    <div
                                        className="w-20 md:w-10 h-10 border border-gray-300 rounded cursor-pointer"
                                        style={{ background: titleColor }}
                                        onClick={() => setShowTitleColorPicker(!showTitleColorPicker)}
                                    ></div>
                                    {showTitleColorPicker && (
                                        <div className="absolute mt-2 left-0 top-full z-50" ref={titleColorPickerRef}>
                                            <GradientColorPicker
                                                enableAlpha={true}
                                                disableHueSlider={false}
                                                disableAlphaSlider={false}
                                                disableInput={false}
                                                disableHexInput={false}
                                                disableRgbInput={false}
                                                disableAlphaInput={false}
                                                presetColors={[]}
                                                gradient={true}
                                                color={titleColor}
                                                onChange={handleTitleColorChange}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-start md:mb-4 mt-4">
                            <div className="flex flex-col w-full md:w-2/3 mr-6 mb-4 md:mb-0">
                                <label htmlFor="description" className="mb-2">Description:</label>
                                <Field
                                    as="textarea"
                                    rows="5"
                                    type="text"
                                    placeholder="Description"
                                    id="description"
                                    className="w-full min-h-20 max-h-40 border border-gray-300 rounded p-2"
                                    value={description}
                                    onChange={handleDescriptionChange}
                                />
                            </div>
                            <div className="flex flex-col relative">
                                <label htmlFor="descriptionColor" className="mb-2">Color:</label>
                                <div className="flex items-center">
                                    <div
                                        className="w-20 md:w-10 h-10 border border-gray-300 rounded cursor-pointer"
                                        style={{ background: descriptionColor }}
                                        onClick={() => setShowDescriptionColorPicker(!showDescriptionColorPicker)}
                                    ></div>
                                    {showDescriptionColorPicker && (
                                        <div className="absolute mt-2 left-0 top-full z-50" ref={descriptionColorPickerRef}>
                                            <GradientColorPicker
                                                enableAlpha={true}
                                                disableHueSlider={false}
                                                disableAlphaSlider={false}
                                                disableInput={false}
                                                disableHexInput={false}
                                                disableRgbInput={false}
                                                disableAlphaInput={false}
                                                presetColors={[]}
                                                gradient={true}
                                                color={descriptionColor}
                                                onChange={handleDescriptionColorChange}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-start md:mb-4">
                            <div className="w-full md:w-2/3 mr-6 mb-4 md:mb-0">
                                <label htmlFor="backgroundColor" className="mb-2">Background Color:</label>
                                <div className="flex items-center relative">
                                    <div
                                        className="w-20 md:w-16 h-10 border border-gray-300 rounded cursor-pointer"
                                        style={{ background: backgroundColor }}
                                        onClick={() => setShowBackgroundColorPicker(!showBackgroundColorPicker)}
                                    ></div>
                                    {showBackgroundColorPicker && (
                                        <div className="absolute mt-2 left-0 z-50" ref={backgroundColorPickerRef}>
                                            <GradientColorPicker
                                                enableAlpha={true}
                                                disableHueSlider={false}
                                                disableAlphaSlider={false}
                                                disableInput={false}
                                                disableHexInput={false}
                                                disableRgbInput={false}
                                                disableAlphaInput={false}
                                                presetColors={[]}
                                                gradient={true}
                                                color={backgroundColor}
                                                onChange={handleBackgroundColorChange}
                                                style={{ width: "calc(100% + 2rem)" }} // Ajuste del ancho
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="w-full md:w-2/3 mt-4 md:mt-0">
                                <label htmlFor="boxColor" className="mb-2">Box Color:</label>
                                <div className="flex items-center relative">
                                    <div
                                        className="w-20 md:w-16 h-10 border border-gray-300 rounded cursor-pointer"
                                        style={{ background: boxColor }}
                                        onClick={() => setShowBoxColorPicker(!showBoxColorPicker)}
                                    ></div>
                                    {showBoxColorPicker && (
                                        <div className="absolute mt-2 left-0 z-50" ref={boxColorPickerRef}>
                                            <GradientColorPicker
                                                enableAlpha={true}
                                                disableHueSlider={false}
                                                disableAlphaSlider={false}
                                                disableInput={false}
                                                disableHexInput={false}
                                                disableRgbInput={false}
                                                disableAlphaInput={false}
                                                presetColors={[]}
                                                gradient={true}
                                                color={boxColor}
                                                onChange={handleBoxColorChange}
                                                style={{ width: "calc(100% + 2rem)" }} // Ajuste del ancho
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

            <div className="flex flex-col md:flex-row md:items-center mb-4 mt-4">
              <div className="w-full md:w-2/3">
                <label htmlFor="multiselect" className="mb-2">Multiselect:</label>
                <Select
                  id="multiselect"
                  options={options}
                  isMulti
                  className="basic-multi-select w-full"
                  classNamePrefix="select"
                  onChange={handleMultiSelectChange}
                />
              </div>
            </div>

            {selectedOptions.map(option => (
              <div className="flex items-center mb-4" key={option.value}>
                <label htmlFor={`input_${option.value}`} className="mb-2">{option.icon}</label>
                <Field
                  type="text"
                  id={`input_${option.value}`}
                  name={`input_${option.value}`}
                  placeholder={`https://www.${option.value}.com`}
                  className="w-80 border border-gray-300 rounded p-2 ml-2"
                />
              </div>
            ))}

            <div className="flex items-center mb-4">
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SocialForm;
