import { Button, ButtonTheme } from "shared/ui/Button/Button";

export const DeleteCompaniesButton = ({ onDelete }: { onDelete: () => void }) => (
	<Button theme={ButtonTheme.OUTLINE_RED} onClick={onDelete}>
		Удалить
	</Button>
);
