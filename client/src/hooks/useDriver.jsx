import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDriverDetail, cleanDriverDetail, getDrivers} from "./../Redux/Actions/actions";

const useDriver = () => {

    const { id } = useParams();

    const driverName = useSelector((state) => state.driverName);
    const driver = useSelector((state) => state.driverDetail);
    const drivers = useSelector((state) => state.drivers);
    const currentPage = useSelector((state) => state.currentPage);
    const driversPerPage = useSelector((state) => state.driversPerPage);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDrivers());
        return () => {
          dispatch(cleanDriverDetail());
        };
    }, [dispatch]);

    useEffect(() => {
        dispatch(getDriverDetail(id));
    
        return () => {
          dispatch(cleanDriverDetail());
        };
      }, [dispatch, id]);

    
  

    return {    
        driverName,
        drivers,
        driver,
    }
};

export default useDriver;

