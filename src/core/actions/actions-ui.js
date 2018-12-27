import constants from 'core/types'

export function openModal(obj) {
  return {
    type: constants.OPEN_MODAL,
    modalKey: obj.modalKey
  }
}

export function openConfirmModal(obj) {
  return {
    type: constants.OPEN_CONFIRM_MODAL,
    modalKey: obj.modalKey
  }
}

export function closeModal() {
  return {
    type: constants.CLOSE_MODAL
  }
}

export function closeConfirmModal() {
  return {
    type: constants.CLOSE_CONFIRM_MODAL
  }
}

export function openLeftDrawer() {
  return {
    type: constants.OPEN_LEFT_DRAWER
  }
}

export function closeLeftDrawer() {
  return {
    type: constants.CLOSE_LEFT_DRAWER
  }
}
