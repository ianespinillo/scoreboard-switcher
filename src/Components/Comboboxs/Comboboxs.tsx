import { useGet } from "@/hooks/useGet";
import { useFiles } from "@/store/store";
import React, { useEffect, useState } from "react";
import Select, { components } from "react-select";

export const Comboboxs = () => {
  const { getCompetition, getFiles } = useGet();
  const { countries, competition } = useFiles();

  const [selectOptions, setSelectOptions] = useState<
    Array<{ value: string; label: string; flag: string }>
  >([]);
  const [competitionOptions, setCompetitionOptions] = useState<
    Array<{ value: string; label: string; logo: string }>
  >([]);
  useEffect(() => {
    countries &&
      setSelectOptions(
        countries.map((country) => ({
          value: country.id,
          label: country.name,
          flag: country.flag_url,
        }))
      );
  }, [countries]);
  useEffect(() => {
    competition &&
      setCompetitionOptions(
        competition.map((competition) => ({
          value: competition.id,
          label: competition.name,
          logo: competition.logo_url,
        }))
      );
  }, [competition]);

  return (
    <div className="flex w-full justify-start p-4 gap-4">
      <label htmlFor="country" className="font-bold flex flex-col gap-1.5">
        Country
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
          onChange={(e) => getCompetition(e!.value)}
          options={selectOptions}
          components={{
            Option: (props) => (
              <components.Option {...props} className="flex items-center">
                <img
                  src={props.data.flag}
                  alt={props.data.label}
                  className="w-6 h-4"
                />
                {props.data.label}
              </components.Option>
            ),
            SingleValue: (props) => (
              <components.SingleValue {...props}>
                <img
                  src={props.data.flag}
                  alt={props.data.label}
                  className="w-6 "
                />
                {props.data.label}
              </components.SingleValue>
            ),
          }}
        />
      </label>
      {/* Combo 2 */}
      <label htmlFor="competition" className="font-bold flex flex-col gap-1.5">
        Competition
        <Select
          styles={{
            control: (base) => ({
              ...base,
              width: "260px",
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
              fontSize: "12px",
              alignItems: "center",
            }),
            option: (base) => ({
              ...base,
              display: "flex",
              gap: "12px",
            }),
          }}
          onChange={(e) => getFiles(e!.value)}
          options={competitionOptions}
          components={{
            Option: (props) => (
              <components.Option {...props} className="flex">
                <img
                  src={props.data.logo}
                  alt={props.data.label}
                  className="w-6 h-6"
                />
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
      </label>
    </div>
  );
};
