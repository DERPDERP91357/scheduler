import React from "react";

import {render, cleanup, waitForElement, fireEvent, getByText, getByAltText, getByPlaceholderText, getAllByTestId, queryByText} from "@testing-library/react";

import Application from "components/Application";
import axios from "__mocks__/axios";

afterEach(cleanup);

describe("Form", () => {
  xit("renders without crashing", () => {
    render(<Application />);
  });

  it("defaults to Monday and changes the schedule when a new day is selected", () => {
    const { getByText } = render(<Application />);
    return (waitForElement(() => getByText("Monday"))
    .then(()=>{
      fireEvent.click(getByText("Tuesday"))
      expect(getByText("Leopold Silvers")).toBeInTheDocument();
    }));
  });


  it("loads data, books an interview and reduces the spots remaining for the first day by 1", async() => {
    const {container, debug} = render(<Application />);
    await waitForElement(() => getByText(container, "Archie Cohen"));
    const appointment = getAllByTestId(container, "appointment")[0];
    fireEvent.click(getByAltText(appointment, "Add"))
    fireEvent.change(getByPlaceholderText(appointment, "Enter Student Name"), {target : {value : "Lydia Miller-Jones"}})
    fireEvent.click(getAllByTestId(appointment, "interviewer-pic")[0])
    fireEvent.click(getByText(appointment, "Save"))

    expect(getByText(appointment, "Saving")).toBeInTheDocument()

    await waitForElement(() => getByText(appointment, "Lydia Miller-Jones"));
    const day = getAllByTestId(container, "day").find(day => {
      return queryByText(day, "Monday")
    })
    expect(getByText(day, "no spots remaining")).toBeInTheDocument()

    //resets data
    axios.put("/api/reset")
  });


















  it("loads data, cancels an interview and increases the spots remaining for Monday by 1", async() => {
    const {container, debug} = render(<Application />);
    await waitForElement(() => getByText(container, "Archie Cohen"));
    const appointments = getAllByTestId(container, "appointment");
    const appointment = appointments.find(element => {
      return queryByText(element, "Archie Cohen")
    })
    fireEvent.click(getByAltText(appointment, "Delete"))
    expect(getByText(appointment, "Are you sure you would like to delete?")).toBeInTheDocument()
    fireEvent.click(getByText(appointment, "Confirm"))
    
    expect(getByText(appointment, "Deleting")).toBeInTheDocument()
    
    await waitForElement(() => getByAltText(appointment, "Add"));
    const day = getAllByTestId(container, "day").find(day => {
      return queryByText(day, "Monday")
    })
    expect(getByText(day, "2 spots remaining")).toBeInTheDocument()

    //resets data
    axios.put("/api/reset")
  });















  
  // it("loads data, edits an interview and keeps the spots remaining for Monday the same", async() => {
  //   const {container, debug} = render(<Application />);
  //   await waitForElement(() => getByText(container, "Archie Cohen"));
  //   const appointment = getAllByTestId(container, "appointment")[0];
  //   fireEvent.click(getByAltText(appointment, "Add"))
  //   fireEvent.change(getByPlaceholderText(appointment, "Enter Student Name"), {target : {value : "Lydia Miller-Jones"}})
  //   fireEvent.click(getAllByTestId(appointment, "interviewer-pic")[0])
  //   fireEvent.click(getByText(appointment, "Save"))

  //   expect(getByText(appointment, "Saving")).toBeInTheDocument()

  //   await waitForElement(() => getByText(appointment, "Lydia Miller-Jones"));

  //   fireEvent.click(getByAltText(appointment, "Edit"))
  //   fireEvent.change(getByPlaceholderText(appointment, "Enter Student Name"), {target : {value : "Hello"}})

  //   fireEvent.click(getByText(appointment, "Save"))
  //   expect(getByText(appointment, "Saving")).toBeInTheDocument()

    // await waitForElement(() => getByText(appointment, "Hello"));
    // const day = getAllByTestId(container, "day").find(day => {
    //   return queryByText(day, "Monday")
    // })
    // expect(getByText(day, "no spots remaining")).toBeInTheDocument()
    // await waitForElement(() => getByAltText(appointment, "Add"));
    // const day = getAllByTestId(container, "day").find(day => {
    //   return queryByText(day, "Monday")
    // })
    // expect(getByText(day, "1 spot remaining")).toBeInTheDocument()
    // const day = getAllByTestId(container, "day").find(day => {
    //   return queryByText(day, "Monday")
    // })
    // expect(getByText(day, "no spots remaining")).toBeInTheDocument()
  // });







  xit("shows the save error when failing to save an appointment", async() => {
    const {container, debug} = render(<Application />);
    await waitForElement(() => getByText(container, "Archie Cohen"));
    const appointment = getAllByTestId(container, "appointment")[0];
    fireEvent.click(getByAltText(appointment, "Add"))
    fireEvent.change(getByPlaceholderText(appointment, "Enter Student Name"), {target : {value : "Lydia Miller-Jones"}})
    fireEvent.click(getAllByTestId(appointment, "interviewer-pic")[0])
    fireEvent.click(getByText(appointment, "Save"))

    expect(getByText(appointment, "Saving")).toBeInTheDocument()

    await waitForElement(() => getByText(appointment, "Lydia Miller-Jones"));

    const day = getAllByTestId(container, "day").find(day => {
      return queryByText(day, "Monday")
    })
    expect(getByText(day, "no spots remaining")).toBeInTheDocument()
  });


  xit("shows the delete error when failing to delete an existing appointment", async() => {
    const {container, debug} = render(<Application />);
    await waitForElement(() => getByText(container, "Archie Cohen"));
    const appointment = getAllByTestId(container, "appointment")[0];
    fireEvent.click(getByAltText(appointment, "Add"))
    fireEvent.change(getByPlaceholderText(appointment, "Enter Student Name"), {target : {value : "Lydia Miller-Jones"}})
    fireEvent.click(getAllByTestId(appointment, "interviewer-pic")[0])
    fireEvent.click(getByText(appointment, "Save"))

    expect(getByText(appointment, "Saving")).toBeInTheDocument()

    await waitForElement(() => getByText(appointment, "Lydia Miller-Jones"));

    const day = getAllByTestId(container, "day").find(day => {
      return queryByText(day, "Monday")
    })
    expect(getByText(day, "no spots remaining")).toBeInTheDocument()
  });
})
