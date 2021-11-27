import powerbi from "powerbi-visuals-api";

import { BarChartBuilder } from "./visualBuilder";
import { SampleBarChartDataBuilder } from "./visualData";

import DataView = powerbi.DataView;

describe("BarChart", () => {
    let visualBuilder: BarChartBuilder;
    let dataView: DataView;
    let defaultDataViewBuilder: SampleBarChartDataBuilder;

    beforeEach(() => {
        visualBuilder = new BarChartBuilder(500, 500);
        defaultDataViewBuilder = new SampleBarChartDataBuilder();
        dataView = defaultDataViewBuilder.getDataView();
    });

    it("main element created", () => {
        visualBuilder.updateRenderTimeout(dataView, () => {
            expect(visualBuilder.mainElement[0]).toBeInDOM();
        });
    });
});