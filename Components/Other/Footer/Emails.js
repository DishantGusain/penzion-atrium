import { SMSIcon } from "@/assets/icons";

const Emails = () => {
  return (
    <div className="space-y-3 lg:text-start text-center flex items-center flex-col lg:items-start">
      <h3 className="text-base font-bold">Emails</h3>

      <div className="flex items-center gap-2">
        <SMSIcon className="w-5 h-5 text-[#fff]" />
        <p className="text-white text-base font-normal leading-relaxed">
          penzionatrium@seznam.cz
        </p>
      </div>
      <div className="flex items-center gap-2">
        <SMSIcon className="w-5 h-5 text-[#fff]" />
        <p className="text-white text-base font-normal leading-relaxed">
          plechac@zskomtu.cz
        </p>
      </div>
    </div>
  );
};

export default Emails;