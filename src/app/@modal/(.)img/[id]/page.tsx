import { Modal } from "./modal";
import FullPageImageView from "~/components/full-image-page";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (isNaN(idAsNumber)) {
    throw new Error("Invalid photo ID");
  }
  return (
    <Modal>
      <FullPageImageView id={idAsNumber} />
    </Modal>
  );
}
