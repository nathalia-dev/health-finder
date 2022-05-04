import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Home from "../../home/Home"
import axios, {AxiosResponse} from "axios";
import { mockDataForHealthTopics } from "../__fixtures__/mockDataForTests"


jest.mock("axios");