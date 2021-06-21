import React from 'react';
import dynamic from 'next/dynamic';

// components
import CardPageVisits from 'components/Cards/CardPageVisits';
import CardSocialTraffic from 'components/Cards/CardSocialTraffic';

// layout for page
import Admin from 'layouts/Admin';

export default function Dashboard() {
  // lazy loaded components
  const CardLineChart = dynamic(() => import('components/Cards/CardLineChart'), { loading: () => <p>...</p> });
  const CardBarChart = dynamic(() => import('components/Cards/CardBarChart'), { loading: () => <p>...</p> });
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4 ">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}

// set the page layout - read in _app
Dashboard.layout = Admin;
