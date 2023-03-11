/* React */
import React, {useState} from 'react'

/* Next JS */
import { useRouter } from "next/router";

/* Sematic UI */
import { Button, Icon, Modal } from 'semantic-ui-react'

/* Components UI */
import { LogoutButton } from '../atoms/Button';
import { OkCancelBtnWrap } from '../molecules/BtnWrap';
import { MiddleTitleH5 } from '../molecules/MiddleTitle';
import CustomerInfo from '../templates/CustomerInfo';

/* Material UI */
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Switch from "@material-ui/core/Switch";


export default function ModalComponent(props){

    const open = props.open;
    const setIsOpen = props.setIsOpen;
    const modalTitle = props.modalTitle;
    const modalCont = props.modalCont;

    console.log(modalCont);
    return (
    <Modal
        size = {'mini'}
        open={open}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
    >
      <Modal.Header>{modalTitle}</Modal.Header>
      <Modal.Content scrolling>
        {modalCont ? (<>
          {modalCont}
        </>):(<>
          <div>표기할 내용이 없습니다!</div>
        </>)}
      </Modal.Content>
      <Modal.Actions>
        <LogoutButton />
      </Modal.Actions>
    </Modal>
  )
}



export function ModalForCustomerInfo(props){

  const isOpen = props.isOpen;
  const setIsOpen = props.setIsOpen;

  const modalTitle = props.modalTitle;


  return (
    <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
        className="customer-info-modal"
    >
      <Modal.Header>{modalTitle ? modalTitle : ""}</Modal.Header>
      <Modal.Content scrolling>
        <CustomerInfo />
      </Modal.Content>
      <Modal.Actions>
        <LogoutButton
          btnText="닫기"
          onClick={()=>setIsOpen(false)}
        />
      </Modal.Actions>
    </Modal>
  )
}


export function MuiModal(props) {
 
  // @ isOpen : boolean
  //   - 현 모달 객체 여닫기 제어 용도
  const isOpen = props.isOpen;
  const setIsOpen = props.setIsOpen;
  
  // @ maxWidth : string
  //   - 모달창 사이즈 옵션
  //   - xs, sm, md, lg, xl
  const maxWidth = props.maxWidth
  
  // @ modalTitle : string
  //   - 모달창 제목
  const modalTitle = props.modalTitle;

  // @ modalCont : string || object
  //   - 모달에 들어갈 내용
  const modalCont = props.modalCont;

  
  // @ modalFooter : string || object
  //   - 모달창 하단부에 들어갈 내용
  const modalFooter = props.modalFooter;
  


  return (<>
      <Dialog
        fullWidth={true}
        maxWidth={maxWidth}
        open={isOpen}
        onClose={()=>setIsOpen(false)}
        aria-labelledby={modalTitle ? "modal-title" : ""}
      >
        {
          modalTitle ? (
            <DialogTitle id="modal-title">{modalTitle}</DialogTitle>
          ) : ""
        }
        
        <DialogContent>
          {modalCont}
        </DialogContent>
        
        <DialogActions>
          { modalFooter ? 
              modalFooter
            : 
              <LogoutButton
                btnText="닫기"
                onClick={()=>setIsOpen(false)}
              /> 
          }
        </DialogActions>
      </Dialog>
  </>);
}
