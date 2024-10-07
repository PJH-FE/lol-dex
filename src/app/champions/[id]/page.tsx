// app>test>[id]>page.tsx
import React from 'react';

const TestDetailPage = ({
  params
}: {
  params: {
    id: string;
  };
}) => {
  return <div>Detail 페이지 : {params.id}</div>;
};

export default TestDetailPage;
