import React from "react";
// import PropTypes from "prop-types";

const ListGruop = (props) => {
  const { items, onItemSelect, textProperty, valueProperty, selectedItem } =
    props;
  return (
    <div>
      <ul className="list-group">
        {items.map((item) => (
          <li
            style={{ cursor: "pointer" }}
            className={
              item === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => onItemSelect(item)}
            key={item[valueProperty]} //Instead of Item._id -> item[valueProperty] For reusability
          >
            {item[textProperty]}
          </li>
        ))}
      </ul>
    </div>
  );
};

ListGruop.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGruop;
