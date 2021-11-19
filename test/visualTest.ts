import powerbi from "powerbi-visuals-api";

import { BarChartBuilder } from "./visualBuilder";

import {
    BarChart as VisualClass
} from "../src/barChart";

describe("BarChart", () => {
    let visualBuilder: BarChartBuilder;
    let dataView: DataView;

    beforeEach(() => {
        visualBuilder = new BarChartBuilder(500, 500);
    });

    it("root DOM element is created", () => {
        expect(visualBuilder.mainElement).toBeInDOM();
    });
});