import React from "react";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import PaymentIcon from "@mui/icons-material/Payment";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const PaymentBox = styled(Box)({
  width: "85%",
  minHeight: "300px",
  marginTop: "3%",
  marginLeft: "10%",
  marginBottom: "1%",
  padding: "4px",
});

function Payment() {
  const [method, setMethod] = React.useState("cod");
  const handleChangeMethod = (event) => {
    setMethod(event.target.value);
  };

  return (
    <PaymentBox>
      <Paper
        sx={{
          width: "100%",
          minHeight: "300px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", ml: "7%" }}>
          <PaymentIcon
            sx={{ mt: "5px", marginX: "2%" }}
            style={{ color: "064635" }}
          />
          <Typography
            variant="subtitle1"
            color="initial"
            sx={{ fontSize: "21px" }}
          >
            Payment Options
          </Typography>
        </Box>
        <Box sx={{ alignSelf: "start", ml: "9%" }}>
          <FormControl>
            <RadioGroup
              aria-labelledby="radio-buttons-group"
              name="radio-buttons-group"
              value={method}
              onChange={handleChangeMethod}
            >
              <FormControlLabel
                value="cod"
                control={
                  <Radio
                    sx={{
                      color: "#085E7D",
                      "&.Mui-checked": {
                        color: "#085E7D",
                      },
                    }}
                  />
                }
                label="Cash On Delivery"
              />
              <FormControlLabel
                disabled="true"
                value="atm"
                control={<Radio />}
                label="Pay with Debit/Credit (temperory unavailabe)"
              />
              <FormControlLabel
                disabled="true"
                value="upi"
                control={<Radio />}
                label="Bhim Upi (temperory unavailabe)"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Paper>
    </PaymentBox>
  );
}

export default Payment;
