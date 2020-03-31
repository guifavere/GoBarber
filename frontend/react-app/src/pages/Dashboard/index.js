import React from "react";

import api from "~/services/api";

export default function Dashboard() {
  api.get("appointments");

  return <p>Dashboard</p>;
}
