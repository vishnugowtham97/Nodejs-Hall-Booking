const express = require("express");
const app = express();

const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Booking = [
  {
    Customer_Id: "01",
    Customer_Name: "Vishnu",
    Date: "2023-06-10",
    Start_Time: "10-00-00 Am",
    End_Time: "11-30-00 Pm",
    Room_Id: "24",
    Room_Name: "single room",
    Booking_Id: "5",
    Booking_Status: true,
    Price_For_1Hour: 3000,
    Repeated_Booking: true,
  },
  {
    Customer_Id: "02",
    Customer_Name: "Gowtham",
    Date: "2023-06-11",
    Start_Time: "10-00-00 Pm",
    End_Time: "11-00-00 Am",
    Room_Id: "104",
    Room_Name: "kings room",
    Booking_Id: "6",
    Booking_Status: true,
    Price_For_1Hour: 1250,
    Repeated_Booking: false,
  },
  {
    Customer_Id: "03",
    Customer_Name: "Will Smith",
    Date: "2022-06-11",
    Start_Time: "09-00-00 Pm",
    End_Time: "10-00-00 Am",
    Room_Id: "105",
    Room_Name: " couples room",
    Booking_Id: "7",
    Booking_Status: true,
    Price_For_1Hour: 800,
    Repeated_Booking: false,
  },
];

app.get("/", function (req, res) {
  res.send(
    "Home Page, Change the url according to this to get the result /Booking, /getBookedRoomAllDetails, /getBookedCustomerAllDetails, /getBookedCustomerCount"
  );
});

app.get("/Booking", function (req, res) {
  res.send(Booking);
});

app.get("/getBookedRoomAllDetails", function (req, res) {
  const { Customer_Name } = req.query;
  console.log(req.query, Customer_Name);
  const filterNames = [];
  Booking.map((data) => {
    if (data.Booking_Status === true) {
      filterNames.push({
        RoomName: data.Room_Name,
        Booking_Status: data.Booking_Status,
        CustomerName: data.Customer_Name,
        Date: data.Date,
        Start_Time: data.Start_Time,
        End_Time: data.End_Time,
      });
    }
  });
  res.send(filterNames);
});

app.get("/getBookedCustomerAllDetails", function (req, res) {
  const { Customer_Name } = req.query;
  console.log(req.query, Customer_Name);
  const filterNames = [];
  Booking.map((dataAll) => {
    if (dataAll.Booking_Status === true) {
      filterNames.push({
        CustomerName: dataAll.Customer_Name,
        RoomName: dataAll.Room_Name,
        Date: dataAll.Date,
        Start_Time: dataAll.Start_Time,
        End_Time: dataAll.End_Time,
      });
    }
  });
  res.send(filterNames);
});

app.get("/getBookedCustomerCount", function (req, res) {
  const { Customer_Name } = req.query;
  console.log(req.query, Customer_Name);
  const filterNames = [];
  var NoCount = 1;
  Booking.map((dataCount) => {
    if (
      dataCount.Booking_Status === true &&
      dataCount.Repeated_Booking == true
    ) {
      NoCount++;
      filterNames.push({
        CustomerName: dataCount.Customer_Name,
        RoomName: dataCount.Room_Name,
        Date: dataCount.Date,
        Start_Time: dataCount.Start_Time,
        End_Time: dataCount.End_Time,
        Booking_Id: dataCount.Booking_Id,
        Booking_Status: dataCount.Booking_Status,
        NoCount: NoCount,
      });
    }
  });
  res.send(filterNames);
});

app.listen(PORT, () => {
  console.log(`SERVER STARTED on PORT ${PORT}`);
});
