import { Autocomplete, Checkbox, TextField } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useEffect, useState } from "react";

const Icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const CheckedIcon = <CheckBoxIcon fontSize="small" />;

const dummyData = [
  {
    name: "Coxartroza primara",
    id: "d1",
    children: [],
  },
  {
    name: "Fractura col femoral(Garden)",
    id: "d2",
    children: [
      {
        id: "d2s1",
        name: "I",
      },
      {
        id: "d2s2",
        name: "II",
      },
      {
        id: "d2s3",
        name: "III",
      },
      {
        id: "d2s4",
        name: "IV",
      },
    ],
  },
  {
    name: "Pseudartroza",
    id: "d3",
    children: [],
  },
  {
    name: "Coxartroza secundara",
    id: "d4",
    children: [
      {
        id: "d4s1",
        name: "Displazie",
      },
      {
        id: "d4s2",
        name: "Post-traumatica",
      },
      {
        id: "d4s3",
        name: "N.A.C.F.",
      },
      {
        id: "d4s4",
        name: "Post-Perthes",
      },
      {
        id: "d4s5",
        name: "P.R. sau S.A.",
      },
    ],
  },
  {
    name: "Form.Tum.primara",
    id: "d5",
    children: [],
  },
  {
    name: "Form.Tum.Metastatica",
    id: "d6",
    children: [],
  },
];

const flatDummyData = dummyData.flatMap((item) => {
  if (item?.children?.length > 0) {
    return [
      {
        name: item.name,
        id: item.id,
        depth: 1,
        hasChildren: true,
      },
      ...item.children.map((child) => ({
        name: child.name,
        id: child.id,
        depth: 2,
        parentId: item.id,
      })),
    ];
  }

  return { name: item.name, id: item.id, depth: 1 };
});

function SelectWithSubcategory() {
  const [value, setValue] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [parentsWithSelectedChildren, setParentsWithSelectedChildren] =
    useState([]);

  useEffect(() => {
      setParentsWithSelectedChildren(value.reduce((acc, cur) => {
          if(cur?.parentId) {
              if (!acc.includes(cur.parentId)) {
                return [...acc, cur.parentId]
              }
          }

          return acc;
      }, []));
  }, [value]);

  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={flatDummyData}
      disableCloseOnSelect
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      getOptionLabel={(option) => option.name}
      getOptionDisabled={(option) => option?.hasChildren}
      renderOption={(props, option, { selected }) => (
        <li {...props} id={option.id}>
          <Checkbox
            icon={Icon}
            checkedIcon={CheckedIcon}
            style={{ marginRight: 8 }}
            sx={{ ml: 2.5 * option.depth }}
            checked={selected || parentsWithSelectedChildren.includes(option.id)}
          />
          {option.name}
        </li>
      )}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Diagnostice" placeholder="Diagnostice" />
      )}
    />
  );
}

export { SelectWithSubcategory };
