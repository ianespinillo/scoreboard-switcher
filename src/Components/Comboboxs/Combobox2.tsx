import { useGet } from "@/hooks/useGet";
import { competition } from "@/types";
import React, { useEffect, useState } from "react";
import Select, { components } from "react-select";

export const Combobox2 = ({
  competitions,
}: {
  competitions: Array<competition>;
}) => {
  const selectOptions: Array<{ value: string; label: string; logo: string }> =
    competitions.map((competition) => ({
      value: competition.id,
      label: competition.name,
      logo: competition.logo_url,
    }));
    const {competition} = useGet();
    console.log(competition)
  return (
    <Select
      styles={{
        control: (base) => ({
          ...base,
          width: "170px",
          minWidth: "100%",
          outline: "2px solid black",
        }),
        menuList(base, props) {
          return {
            ...base,
            backgroundColor: "fff",
            borderRadius: "4px",
          };
        },
        indicatorSeparator: () => ({
          display: "none",
        }),
        singleValue: (base) => ({
          ...base,
          color: "black",
          display: "flex",
          gap: "12px",
          alignItems: "center",
        }),
        option: (base) => ({
          ...base,
          display: "flex",
          gap: "12px",
        }),
      }}
      options={selectOptions}
      components={{
        Option: (props) => (
          <components.Option {...props} className="flex">
            <img src={props.data.logo} alt={props.data.label} className="w-6" />
            {props.data.label}
          </components.Option>
        ),
        SingleValue: (props) => (
          <components.SingleValue {...props}>
            <img
              src={props.data.logo}
              alt={props.data.label}
              className="w-6 "
            />
            {props.data.label}
          </components.SingleValue>
        ),
      }}
    />
  );
};
