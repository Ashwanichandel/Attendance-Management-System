import React from "react";
import { makeStyles } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AdminSidebar from "./StaffSidebar";
import Admin from "../../Backend/Models/Admin";

const useStyles = makeStyles({
  card: {
    boxShadow: "0 1rem 2rem 0 rgba(136, 152, 170, .15) !important",
  },
  cardHeader: {
    background: "primary",
    color: "white",
  },
  cardContent: {
    textAlign: "center",
  },
  cardIcon: {
    fontSize: "4rem",
  },
  cardFooter: {
    background: "primary",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const StaffProfile: React.FC<any> = (admin:Admin) => {
  const classes = useStyles();
  console.log(admin)
  // Mock data for demonstration
  const students = [];
  const staffs = [];
  const departments = [];
  const courses = [];
  const user = {
    name: "John Doe",
  };

  return (
      <div>
        <Grid container spacing={5} className="mb-5">
          <Grid item xs={12} sm={3}>
            <Card className={classes.card}>
              <CardHeader
                className={classes.cardHeader}
                title={
                  <div>
                    <i className={`fa fa-book-reader ${classes.cardIcon}`} />
                  </div>
                }
                subheader={
                  <div>
                    <Typography variant="h3">{students.length}</Typography>
                    <Typography variant="subtitle1">Students</Typography>
                  </div>
                }
              />
              <CardContent>
                <a href="/admin/getAllStudents">
                  <div className={classes.cardFooter}>
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fa fa-arrow-circle-right" />
                    </span>
                  </div>
                </a>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card className={classes.card}>
              <CardHeader
                className={classes.cardHeader}
                title={
                  <div>
                    <i
                      className={`fa fa-chalkboard-teacher ${classes.cardIcon}`}
                    />
                  </div>
                }
                subheader={
                  <div>
                    <Typography variant="h3">{staffs.length}</Typography>
                    <Typography variant="subtitle1">Staffs</Typography>
                  </div>
                }
              />
              <CardContent>
                <a href="/admin/getAllStaffs">
                  <div className={classes.cardFooter}>
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fa fa-arrow-circle-right" />
                    </span>
                  </div>
                </a>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card className={classes.card}>
              <CardHeader
                className={classes.cardHeader}
                title={
                  <div>
                    <i className={`fas fa-university ${classes.cardIcon}`} />
                  </div>
                }
                subheader={
                  <div>
                    <Typography variant="h3">{departments.length}</Typography>
                    <Typography variant="subtitle1">Departments</Typography>
                  </div>
                }
              />
              <CardContent>
                <a href="/admin/getDept">
                  <div className={classes.cardFooter}>
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fa fa-arrow-circle-right" />
                    </span>
                  </div>
                </a>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card className={classes.card}>
              <CardHeader
                className={classes.cardHeader}
                title={
                  <div>
                    <i className={`fa fa-book ${classes.cardIcon}`} />
                  </div>
                }
                subheader={
                  <div>
                    <Typography variant="h3">{courses.length}</Typography>
                    <Typography variant="subtitle1">Courses</Typography>
                  </div>
                }
              />
              <CardContent>
                <a href="/admin/getAllCourses">
                  <div className={classes.cardFooter}>
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fa fa-arrow-circle-right" />
                    </span>
                  </div>
                </a>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={5} className="mt-5">
          <Grid item xs={12}>
            <Card className="card card-profile shadow">
              <Grid container justifyContent="center">
                <Grid item xs={12} lg={3} order={{ xs: 2, lg: 2 }}>
                  <div className="card-profile-image">
                    <a href="#">
                      <img
                        src="https://sammilanimahavidyalaya.org/wp-content/uploads/2016/01/student-icon.png"
                        className="rounded-circle"
                      />
                    </a>
                  </div>
                </Grid>
              </Grid>
              <CardHeader
                title={
                  <div className="text-center">
                    <Typography variant="h3">
                      {user.name}
                      <span className="font-weight-light">, 21</span>
                    </Typography>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      New Delhi, India
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Administrator - BUJHS
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      BUNDELKHAND UNIVERSITY, JHANSI
                    </div>
                  </div>
                }
                subheader={
                  <div className="text-center mt-5">
                    <Typography variant="body1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas, animi quasi suscipit magnam alias, similique
                      optio molestias repellat quia ullam voluptatibus ipsum.
                      Debitis esse tempore asperiores in saepe quidem
                      architecto?
                    </Typography>
                    <a href="#">Show more</a>
                  </div>
                }
              />
              <CardContent className={classes.cardContent}>
                <div className="d-flex justify-content-between">
                  <Button variant="contained" color="info" className="mr-4">
                    Email Teachers
                  </Button>
                  <Button variant="contained" className="float-right">
                    Email Students
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    
  );
};

export default StaffProfile;
