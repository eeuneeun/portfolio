
/* React */
import React, { useEffect, useState } from 'react'

/* Redux */
import { useSelector, useDispatch } from 'react-redux';

/* Library */
import Select  from 'react-select'
import { setSelectedPlant } from '../../../store/reducers/plantSlice';


export function PlantSearch(props){

    /* Redux */
    const dispatch = useDispatch();

    /* props */
    const className = props.className;

    /* State */
    const [ isLoading, setIsLoaing ] = useState(true);

    const {allPlantList, selectedPlant, accToken} = useSelector(state => ({
        allPlantList: state.plantSlice.allPlantList,
        selectedPlant: state.plantSlice.selectedPlant,
        accToken: state.tokenSlice.accToken
    }));

    function selectPlant(value) {
        //console.log(value) //배열 : 다수의 발전소 선택 가능!
        
        let tmp = []
        value.map((item, idx)=>{
            tmp.push({
                id : item.value,
                name : item.label
            })
        })
        if(value != undefined){
            dispatch(setSelectedPlant(tmp));
        }
    }

    /* useEffect */
    useEffect(()=>{
        if(allPlantList != undefined){
            setIsLoaing(false)
        }
    },[allPlantList])

    return(<>
        <div className={`search-select gen-search ${className ? className : ""}`}>
            { !isLoading && (       
                <Select
                    placeholder={"발전소를 검색해주세요"}
                    classNamePrefix="plant-search"
                    isMulti
                    options={allPlantList}
                    onChange={selectPlant}
                />
            )}
        </div>
    </>)
}