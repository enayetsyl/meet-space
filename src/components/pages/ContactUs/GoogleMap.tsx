const GoogleMap = () => {
  return (
    <div className="bg-white h-[600px] px-8 pt-8 pb-12">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2559.085462351859!2d91.88917575465285!3d24.894796638868947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1725696212607!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
