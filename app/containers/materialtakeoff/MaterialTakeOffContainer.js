import React from "react";
import MaterialTakeOff from "../../components/MaterialTakeOff";
import PolySheetingContainer from "../polysheeting/PolySheetingContainer";
import BagsBarrelsContainer from "../bagsbarrels/BagsBarrelsContainer";
import PolyTubingContainer from "../polytubing/PolyTubingContainer";
import GloveBagsContainer from "../glovebags/GloveBagsContainer";
import ProtectiveClothingContainer from "../protectiveclothing/ProtectiveClothingContainer";
import ChemicalsContainer from "../chemicals/ChemicalsContainer";
import FiltersContainer from "../filters/FiltersContainer";
import HandToolsContainer from "../handtools/HandToolsContainer";
import RespiratorsContainer from "../respirators/RespiratorsContainer";
import SafetyEquipmentContainer from "../safetyequipment/SafetyEquipmentContainer";

var MaterialTakeOffContainer = React.createClass({

    render: function () {
        return (
            <MaterialTakeOff>
                <PolySheetingContainer />
                <BagsBarrelsContainer />
                <PolyTubingContainer />
                <GloveBagsContainer />
                <ProtectiveClothingContainer />
                <ChemicalsContainer />
                <FiltersContainer />
                <HandToolsContainer />
                <RespiratorsContainer />
                <SafetyEquipmentContainer />
            </MaterialTakeOff>
            );
    }
});

module.exports = MaterialTakeOffContainer;