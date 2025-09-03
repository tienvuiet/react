// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import './App.css'
// import { Button } from 'antd';
// import { SearchOutlined } from '@ant-design/icons';
// import { Tabs } from 'antd';
// import type { TabsProps } from 'antd';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// const onChange = (key: string) => {
//   console.log(key);
// };

import Ex8 from "./components/Ex8"

// import Ex7 from "./components/Ex7"

// import Ex6 from "./components/Ex6"

// import DefauiltLayout from "./layout/DefauiltLayout"

// import Ex4 from "./components/Ex4"
// import Ex5 from "./components/Ex5"

// import Ex3 from "./components/Ex3"

// import Ex2 from "./components/Ex2"

// import Ex1 from "./components/Ex1"

// const items: TabsProps['items'] = [
//   {
//     key: '1',
//     label: 'Tab 1',
//     children: 'Content of Tab Pane 1',
//   },
//   {
//     key: '2',
//     label: 'Tab 2',
//     children: 'Content of Tab Pane 2',
//   },
//   {
//     key: '3',
//     label: 'Tab 3',
//     children: 'Content of Tab Pane 3',
//   },
// ];



function App() {
  // const [age, setAge] = React.useState('');

  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value as string);
  // };

  return (
    <>
    {/* bai 1 */}
      {/* <Ex1/> */}
      {/* bai 2 */}
      {/* <Ex2/> */}
      {/* bai 3 */}
      {/* <Ex3/> */}
      {/* bai 4 */}
      {/* <Ex4/> */}
      {/* bai 5 */}
      {/* <Ex5/> */}
      {/* bai 6 */}
      {/* <Ex6/> */}
      {/* bai 7 */}
      {/* <Ex7/> */}
      {/* bai 8 */}
      <Ex8/>



       {/* <DefauiltLayout/> */}

      {/* <div className='bg-yellow-500 p-3'> 
        <p className='text-red-400 text-[40px] font-extralight'>Hinh khoi </p>
      </div>

      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Age"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />; */}

      {/* <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>


      <Button type="primary" shape="circle" icon={<SearchOutlined />} /> */}
    </>
  )
}

export default App
