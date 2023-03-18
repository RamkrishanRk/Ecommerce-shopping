import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";

const OrderList = () => {
  const [data, setData] = useState();
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTdiY2E4MTI2ZDE3ZjA5NTAyNTc4NCIsImlhdCI6MTY3NjEzMTU0MCwiZXhwIjoxNjgzOTA3NTQwfQ.7WWBjNq0NvJjYv0inTxTt07PFcY_9InWGFzKE2WqfQM"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://localhost:8500/api/v1/payment/get-order", requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result?.result?.orders?.items))
      .catch((error) => console.log("error", error));
  }, []);

  const getBadge = (status) => {
    switch (status) {
      case "paid":
        return "label-success";
      case "created":
        return "status-label";
      default:
        return "primary";
    }
  };
  return (
    <React.Fragment>
      <Layout>
        <div className="grey-bg container mt-5 mb-4">
          <div className="row">
            <div className="col-xl-12 col-md-12">
              {data?.length ? (
                data ? (
                  data?.map((item) => {
                    console.log(item, "data");
                    return (
                      <div className="card-grey-bg justify-content-sm-between align-items-center">
                        <h6 className="card-details">{item?.id}</h6>
                        <p className="card-price">{item?.amount}</p>
                        <p className="card-currency">{item?.currency}</p>
                        <button className={getBadge(item.status)}>
                          {item?.status}
                        </button>
                      </div>
                    );
                  })
                ) : (
                  ""
                )
              ) : (
                <div className="card-grey-bg justify-content-sm-between align-items-center">
                  <h6 className="card-details">No Data found</h6>
                </div>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};
export default OrderList;
