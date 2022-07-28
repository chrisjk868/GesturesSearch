import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import { CheckLabel, LabelStructure } from './components';
import './components.css';
import { labels_data } from "./labels_data.js";
import BodyComponent from './BodyComponent.tsx';

/**
 * LabelsForm
 *
 * The form to guide labeling.
 * TODO: Currently implemented with a fixed dummy list, will replace with fetching data from database.
 *
 * parent props:
 *  - form_change_handler_type1 (e, categoryname, subcategoryname)
 *  - form_change_handler_type2 (e, checked, categoryname, subcategoryname)
 *  - form_change_handler_type3 (e, categoryname)
 *
 * references:
 *  https://stackoverflow.com/questions/35537229/how-can-i-update-the-parents-state-in-react
 *  https://stackoverflow.com/questions/43040721/how-to-update-nested-state-properties-in-react
 *  https://stackoverflow.com/questions/57798841/react-setting-state-for-deeply-nested-objects-w-hooks
 */
export default function LabelsForm(props) {

  /**
   * render_category
   * 
   * To render the entire module of one category, set color accordingly.
   */
  const render_category = (category) => {

    // Determine color according to category.
    var color = category.color;

    // Disabling posture category from rendering for now
    if (category.category === 'posture') {
      console.log('hit')
      return (
        <div></div>
      )    
    }
    // Render subcategories.
    return (
      <div className="FormCategory">
        <div className="CategoryHeader">
          <div
            className="CategoryName"
            style={{color:color}}
          >
            {category.category_displaytext}
          </div>
        </div>
        {
          // Special case: modality.
          category.category == "modality" ?
            <div className="ModalityDisplay">
              <div>
                <BodyComponent
                  partsInput={LabelStructure.modality}
                  form_change_handler={props.form_change_handler_type3}
                />
              </div>
              <div className="FormSubcategories">
                {category.subcategories.map(
                  (subcategory) =>
                  render_subcategory(subcategory, category.category, color)
                )}
              </div>
            </div>
          :
            <div className="FormSubcategories">
              {category.subcategories.map(
                (subcategory) =>
                render_subcategory(subcategory, category.category, color)
              )}
            </div>
        }
      </div>
    );
  };

  /**
   * render_subcategory
   * 
   * To render everything in one subcategory depending on its type.
   *
   * references:
   *  https://stackoverflow.com/questions/8605516/default-select-option-as-blank
   */
  const render_subcategory = (subcategory, categoryname, color) => {

    // Check subcategory type, determine style accordingly.
    switch (subcategory.type) {

      // Type 1 → dropdown (each picture should strictly have =1 label under this category.)
      case 1:
        return (
          <div className="FormSubcategory">
            <div className="SubcategoryHeader">
              <div className="SubcategoryName">
                {subcategory.subcategory_displaytext}
              </div>
            </div>
            <select
              className="Dropdown"
              id={subcategory.subcategory}
              onChange={(e) => props.form_change_handler_type1(e, categoryname, subcategory.subcategory)}
            >
                <option disabled selected value>
                  ---
                </option>
              {subcategory.labels.map((label) =>
                <option
                  value={label.label}
                  key={label.label_id}
                >
                  {label.label}
                </option>
              )}
            </select>
          </div>
        );
        break;

      // Type 2 → checklabel list (accepts a list of labels, any number from 0 to all possible.)
      // TODO: make searchable
      case 2:
        return (
          <div className="FormSubcategory">
            <div className="SubcategoryHeader">
              <div className="SubcategoryName">
                {subcategory.subcategory_displaytext}
              </div>
            </div>
            <div
              className="LabelList"
              id={subcategory.subcategory}
              category={categoryname}
              subcategory={subcategory.subcategory}
            >
              {subcategory.labels.map((label) =>
                <CheckLabel
                  value={label.label}
                  color={color}
                  key={label.label_id}
                  category={categoryname}
                  subcategory={subcategory.subcategory}
                  form_change_handler={props.form_change_handler_type2}
                />
              )}
            </div>
          </div>
        );
        break;

      // Type 3 → human figure
      case 3:
        return (
          <div className="ModalityDisplay_statelist">
            <div className="SubcategoryName">
              {subcategory.subcategory_displaytext}
            </div>
            <input
              type="checkbox"
//              value={checked}
//              checked={checked}
//              onChange={(e) => {
//                setChecked(prev => !prev);
//                //console.log("checked state in CheckLabel: " + checked); //DEBUG
//                props.form_change_handler(e, !checked, props.category, props.subcategory);  // note: use "!checked" instead of "checked" because check state has not changed yet here
//              }}
              style={{display:"none"}}
            />
          </div>
        );
        break;

      default:
        // TODO: when type number is invalid
    }
  };

  /* render */
  return (
    <Form
      className="LabelsForm"
    >
      {labels_data.map(
        (category) => render_category(category)
      )}
    </Form>
  );
}