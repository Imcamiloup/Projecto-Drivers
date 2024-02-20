import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDriverDetail, cleanDriverDetail, getDrivers , paginateDrivers} from "./../Redux/Actions/actions";

const useDriver = () => {

    const { id } = useParams();

    

    const driverName = useSelector((state) => state.driverName);
    const driver = useSelector((state) => state.driverDetail);
    const drivers = useSelector((state) => state.drivers);
    const teams = useSelector(state => state.teams);
    const currentPage = useSelector((state) => state.currentPage);

    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDrivers());
        return () => {
          dispatch(cleanDriverDetail());
        };
    }, []);

    useEffect(() => {
        dispatch(getDriverDetail(id));
    
        return () => {
          dispatch(cleanDriverDetail());
        };
      }, [dispatch, id]);

      useEffect(() => {
        // Paginar los conductores cada vez que currentPage cambia
        const pageSize = 9;
        dispatch(paginateDrivers(currentPage, pageSize));
    }, [currentPage]);

    
  

    return {    
        driverName,
        drivers,
        driver,
        teams,
        currentPage
    }
};

export default useDriver;

