import { Checkbox, FormControlLabel } from "@mui/material";

interface FeatureCheckboxProps {
  name: string;
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FeatureCheckbox = ({
  name,
  label,
  checked,
  onChange,
}: FeatureCheckboxProps) => {
  return (
    <FormControlLabel
      control={<Checkbox name={name} checked={checked} onChange={onChange} />}
      label={label}
      sx={{
        "& .MuiTypography-root": { whiteSpace: "nowrap" },
      }}
    />
  );
};

export default FeatureCheckbox;
