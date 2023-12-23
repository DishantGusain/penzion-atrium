import { Link } from "@/navigation";
import { BookNowIcon } from "@/assets/icons";
import { Button } from "@/Components/ui/button.jsx";

const BookNow = ({ buttonClassName, bookNow, closeMenu }) => {
  return (
    <Link href="/contact">
      <Button onClick={closeMenu} className={buttonClassName}>
        <BookNowIcon className="w-4 h-4" />
        {bookNow}
      </Button>
    </Link>
  );
};

export default BookNow;
