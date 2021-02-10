// import React, { Component } from 'react';

// import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';

// import fleetLogo from '../../../src/images/fleetLogo.png';

// class Header extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             activeTab: 'user'
//         }
//     }

//     handleTagClick = (e, type) => {
//         this.setState({
//             activeTab: type
//         })
//     }

//     render() {
//         const { activeTab } = this.state;
//         return(
//             <Grid container direction='row' xs={12} sm={12} md={12} lg={12} spacing={2} style={{marginTop: '10px', marginBottom: '10px'}}>
//                 <Grid item xs={1} sm={1} md={1} lg={1}>

//                 </Grid>
//                 <Grid item xs={4} sm={3} md={2} lg={2}>
//                     <img src={fleetLogo} alt="logo" height="55px"></img>
//                 </Grid>
//                 <Grid item xs={2} sm={1} md={1} lg={1}>

//                 </Grid>
//                 <Grid item xs={3} sm={3} md={2} lg={2}>
//                     <Button
//                         variant="outlined"
//                         size='large'
//                         onClick={(e) => this.handleTagClick(e, 'jobs')}
//                         style={(activeTab === 'jobs') ?
//                             {background: '#0f0c0c', color: '#FFFFFF', borderRadius: '0',  width: '175px', height:"55px"}
//                             :
//                             {background: '#ffffff', color: '#000000', borderRadius: '0',  width: '175px', height:"55px"}
//                         }
//                     >
//                         Jobs
//                     </Button>
//                 </Grid>
//                 <Grid item xs={3} sm={3} md={2} lg={2}>
//                     <Button
//                         variant="outlined"
//                         size='large'
//                         onClick={(e) => this.handleTagClick(e, 'social')}
//                         style={(activeTab === 'social') ?
//                             {background: '#0f0c0c', color: '#FFFFFF', borderRadius: '0', width: '175px', height:"55px"}
//                             :
//                             {background: '#ffffff', color: '#000000', borderRadius: '0', width: '175px', height:"55px"}
//                         }    
//                     >
//                         Get Social
//                     </Button>
//                 </Grid>
//                 <Grid item xs={4} sm={3} md={2} lg={2}>
//                     <Button 
//                         variant="outlined"
//                         size='large'
//                         onClick={(e) => this.handleTagClick(e, 'user')}
//                         style={(activeTab === 'user') ?
//                             {background: '#0f0c0c', color: '#ffffff', borderRadius: '0', width: '175px', height:"55px"}
//                             :
//                             {background: '#ffffff', color: '#000000', borderRadius: '0', width: '175px', height:"55px"}
//                         }
//                         >
//                             James Keem
//                         </Button>
//                 </Grid>
//                 <Grid item xs={4} sm={3} md={2} lg={2}>
//                   <Button
//                     variant="outlined"
//                     size='large'
//                     onClick={(e) => this.handleTagClick(e, 'menu')}
//                     style={(activeTab === 'menu') ?
//                         {background: '#0f0c0c', color: '#ffffff', borderRadius: '0', height:"55px"}
//                         :
//                         {background: '#ffffff', color: '#000000', borderRadius: '0', height:"55px"}
//                     }
//                     >
//                         Menu
//                     </Button>
//                 </Grid>
//             </Grid>
//         )
//     }
// }

// export default Header;